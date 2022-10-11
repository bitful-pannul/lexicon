import * as React from 'react';
import { AppType } from '../AppDock/AppDock';
import { ContextType } from '../Context';
import { NetworkType } from '../Network';
import { VoiceProps } from '../Voice';
export declare type SystemBarProps = {
    selectedApp: AppType;
    apps?: [AppType];
    selectedContext?: ContextType;
    availableContexts?: ContextType[];
    selectedNetwork?: NetworkType;
    availableNetworks: NetworkType[];
    ship: {
        patp: string;
        color: string;
    };
    voice: VoiceProps;
    children?: React.ReactChildren;
    onContextSelect?: (context: ContextType) => any;
    onSettingsClick?: () => any;
};
export declare const SystemBar: any;
