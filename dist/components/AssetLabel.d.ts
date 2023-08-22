/// <reference types="react" />
import { Asset } from '@clearblade/ia-mfe-core';
import { CbDictionary } from '../types';
export declare const AssetLabel: ({ assets, assetId, }: {
    assets: CbDictionary<string, Asset['frontend']>;
    assetId: string;
}) => JSX.Element;
