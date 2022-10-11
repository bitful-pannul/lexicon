import React, { FC } from 'react';
import { SpaceProps, WidthProps } from 'styled-system';
declare type KPIProps = {
    inline?: boolean;
    label?: string;
    value: string;
    icon?: any;
} & SpaceProps & WidthProps;
export declare const KPI: FC<KPIProps>;
declare const _default: {
    KPI: React.FC<KPIProps>;
};
export default _default;
