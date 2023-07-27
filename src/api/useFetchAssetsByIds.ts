import {
  createFrontendAssetsQuery,
  fetchAssets,
  Asset,
} from '@clearblade/ia-mfe-core';
import { useEffect } from 'react';
import { QueryFunctionContext, useQuery, useQueryClient } from 'react-query';

export const assetsByIdsFetcherFn = ({
  queryKey: [
    {
      params: { ids },
    },
  ],
}: QueryFunctionContext<
  ReturnType<typeof assetsByIdsQueryKeys.detail>
>): Promise<{
  DATA: undefined | Asset['frontend'][];
  COUNT: number;
}> => {
  if (ids.length === 0) {
    return new Promise(() => ({
      DATA: [],
      COUNT: 0,
    }));
  }
  const query = createFrontendAssetsQuery({
    Filters: [[{ type: 'default', operator: 'IN', field: 'id', value: ids }]],
  });
  return fetchAssets(new AbortController(), { query });
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
