export declare const assetQueryKeys: {
    byIds: (params: {
        ids: string[];
    }) => readonly [{
        readonly scope: "assetsByIds";
        readonly params: {
            ids: string[];
        };
    }];
};
