import { Asset } from '@clearblade/ia-mfe-core';
import { QueryFunctionContext } from 'react-query';
import { CbDictionary } from '../types';
export declare const assetsByIdsFetcherFn: ({ queryKey: [{ params: { ids }, },], }: QueryFunctionContext<ReturnType<typeof assetsByIdsQueryKeys.detail>>) => Promise<{
    DATA: undefined | CbDictionary<string, Asset['frontend']>;
    COUNT: number;
}>;
export declare const assetsByIdsQueryKeys: {
    detail: (params: {
        ids: string[];
    }) => readonly [{
        readonly scope: "assetsByIds";
        readonly params: {
            ids: string[];
        };
    }];
};
export declare function useFetchAssetsByIds(ids: string[]): import("react-query").UseQueryResult<{
    DATA: CbDictionary<string, {
        type: string;
        id: string;
        label: string;
        image: string;
        description: string;
        parent: string;
        owners: string[];
        latitude: number;
        longitude: number;
        last_updated: string;
        location_updated: string;
        custom_data: {
            [x: string]: string | number | boolean;
            [x: number]: string | number | boolean;
            [x: symbol]: string | number | boolean;
        };
        attributes_last_updated: {
            [x: string]: string;
            [x: number]: string;
            [x: symbol]: string;
        };
        location_x: number;
        location_y: number;
        location_z: number;
        location_type: string;
        location_unit: string;
        custom_id_1: string;
        custom_id_2: string;
        last_location_updated: string;
        group_id: string;
        tree_id: string;
        is_root: boolean;
        item_id: string;
    }>;
    COUNT: number;
}, unknown>;
