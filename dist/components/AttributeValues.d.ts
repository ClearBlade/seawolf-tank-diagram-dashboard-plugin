/// <reference types="react" />
import { Asset, AssetType } from '@clearblade/ia-mfe-core';
import { CbDictionary } from '../types';
export declare const AttributeValues: ({ assets, assetTypeDict, assetId, attributeNames, }: {
    assets: CbDictionary<string, Asset['frontend']>;
    assetTypeDict: CbDictionary<string, AssetType['frontend']>;
    assetId: string;
    attributeNames: string[];
}) => JSX.Element;
