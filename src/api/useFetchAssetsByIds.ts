import {
  Asset,
  createFrontendAssetsQuery,
  fetchAssets,
} from "@clearblade/ia-mfe-core";
import { QueryFunctionContext, useQuery, useQueryClient } from "react-query";
import { CbDictionary } from "../types";
import { assetQueryKeys } from "./queryKeys";
import { useEffect } from "react";
import useRefreshRateStore from "../stores/useRefreshRateStore";

export const assetsByIdsFetcherFn = ({
  queryKey: [
    {
      params: { ids },
    },
  ],
}: QueryFunctionContext<ReturnType<typeof assetQueryKeys.byIds>>): Promise<{
  DATA: undefined | CbDictionary<string, Asset["frontend"]>;
  COUNT: number;
}> => {
  if (ids.length === 0) {
    return new Promise(() => ({
      DATA: {},
      COUNT: 0,
    }));
  }
  const query = createFrontendAssetsQuery({
    filters: {
      ids: ids,
    },
  });
  return fetchAssets(new AbortController(), query).then(({ DATA, COUNT }) => {
    const mappedData = DATA.reduce<CbDictionary<string, Asset["frontend"]>>(
      (acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      },
      {}
    );
    return {
      DATA: mappedData,
      COUNT,
    };
  });
};

export function useFetchAssetsByIds(ids?: string[]) {
  const queryclient = useQueryClient();
  const refreshRate = useRefreshRateStore((state) => state.refreshRate);

  useEffect(() => {
    if (!ids) {
      queryclient.setQueryData(assetQueryKeys.byIds({ ids }), {
        DATA: [],
        COUNT: 0,
      });
    }
  }, [ids, queryclient]);

  return useQuery(assetQueryKeys.byIds({ ids }), assetsByIdsFetcherFn, {
    refetchOnMount: false,
    keepPreviousData: true,
    refetchInterval: refreshRate ? convertSecondsToMS(refreshRate) : false,
    refetchIntervalInBackground: false,
  });
}

const convertSecondsToMS = (seconds: number) => seconds * 1000;
