import { Asset } from "@clearblade/ia-mfe-core";
import { QueryFunctionContext } from "react-query";
import { CbDictionary } from "../types";
import { assetQueryKeys } from "./queryKeys";
export declare const assetsByIdsFetcherFn: ({ queryKey: [{ params: { ids }, },], }: QueryFunctionContext<ReturnType<typeof assetQueryKeys.byIds>>) => Promise<{
    DATA: undefined | CbDictionary<string, Asset["frontend"]>;
    COUNT: number;
}>;
export declare function useFetchAssetsByIds(ids?: string[]): import("react-query").UseQueryResult<{
    DATA: CbDictionary<string, {
        type: string;
        id: string;
        label: string;
        image: string;
        description: string;
        parent: string;
        custom_data: {
            [x: string]: string | number | boolean;
            [x: number]: string | number | boolean;
            [x: symbol]: string | number | boolean;
        };
        last_updated: string;
        owners: string[];
        latitude: number;
        longitude: number;
        group_id: string;
        floor_levels: number[];
        item_id: string;
        location_updated: string;
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
        tree_id: string;
        is_root: boolean;
        attributes_labels: {
            [x: string]: string;
            [x: number]: string;
            [x: symbol]: string;
        };
    }>;
    COUNT: number;
}, unknown>;
