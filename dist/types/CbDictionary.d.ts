export type CbDictionary<K extends string, T> = {
    [P in K]?: T;
};
