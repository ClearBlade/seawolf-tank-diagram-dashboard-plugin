export const assetQueryKeys = {
  byIds: (params: { ids: string[] }) =>
    [{ scope: 'assetsByIds', params }] as const,
};
