import React, { FC } from 'react';
import { OptionType } from '..';
import { HeaderProps } from './Header';
export declare type ListHeaderProps = {
    selectedOption?: string;
    options?: OptionType[];
    rightOptions?: React.ReactNode;
    onSelected?: (option: OptionType) => void;
} & HeaderProps;
export declare const ListHeader: FC<ListHeaderProps>;
declare const _default: {
    ListHeader: React.FC<ListHeaderProps>;
};
export default _default;
