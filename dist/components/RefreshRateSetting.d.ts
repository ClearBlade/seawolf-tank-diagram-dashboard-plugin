/// <reference types="react" />
import { TimeUnitMultiplier } from '../utils';
export default function RefreshRateSetting({ assetIds, }: {
    assetIds: string[];
}): JSX.Element;
export declare const getLabelForRefreshRate: (rate: {
    count: number;
    units: TimeUnitMultiplier;
}, abbrev?: boolean) => string;
