import { FC } from 'react';
export declare type NetworkType = {
    blockchain: string;
    network: string;
};
declare type NetworkProps = {
    status?: 'connected' | 'disconnected';
    selectedNetwork?: NetworkType;
    availableNetworks: NetworkType[];
};
export declare const Network: FC<NetworkProps>;
export declare const NetworkStatus: import("styled-components").StyledComponent<"div", any, {
    online: boolean;
}, never>;
export {};
