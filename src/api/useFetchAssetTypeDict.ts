import {
  Asset,
  createFrontendAssetsQuery,
  fetchAssets,
} from '@clearblade/ia-mfe-core';
import { QueryFunctionContext, useQuery } from 'react-query';
import { CbDictionary } from '../types';

export const assetsByIdsFetcherFn = ({
  queryKey: [
    {
      params: { ids },
    },
  ],
}: QueryFunctionContext<
  ReturnType<typeof assetsByIdsQueryKeys.detail>
>): Promise<{
  DATA: undefined | CbDictionary<string, Asset['frontend']>;
  COUNT: number;
}> => {
  if (ids.length === 0) {
    return new Promise(() => ({
      DATA: {},
      COUNT: 0,
    }));
  }
  const query = createFrontendAssetsQuery({
    Filters: [[{ type: 'default', operator: 'IN', field: 'id', value: ids }]],
  });
  return fetchAssets(new AbortController(), { query }).then(
    ({ DATA, COUNT }) => {
      const mappedData = DATA.reduce<CbDictionary<string, Asset['frontend']>>(
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
    }
  );
};

export const assetsByIdsQueryKeys = {
  detail: (params: { ids: string[] }) =>
    [{ scope: 'assetsByIds', params }] as const,
};

export function useFetchAssetsByIds(ids: string[]) {
  return useQuery(assetsByIdsQueryKeys.detail({ ids }), assetsByIdsFetcherFn, {
    refetchOnMount: false,
    keepPreviousData: true,
  });
}
