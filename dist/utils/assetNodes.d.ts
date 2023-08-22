/// <reference types="react" />
import { Asset, AssetType } from '@clearblade/ia-mfe-core';
import { CbDictionary } from '../types';
import { NodeTypes } from './nodeTypes';
export declare const allNodes: (assets: CbDictionary<string, Asset['frontend']>, assetTypeDict: CbDictionary<string, AssetType['frontend']>) => ({
    id: string;
    position: {
        x: number;
        y: number;
    };
    data: {
        label: JSX.Element;
    };
    type: NodeTypes;
} | {
    id: string;
    position: {
        x: number;
        y: number;
    };
    data: {
        label: string;
    };
    type: NodeTypes;
})[];
