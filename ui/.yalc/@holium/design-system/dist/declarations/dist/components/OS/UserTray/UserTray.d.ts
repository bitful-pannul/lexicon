import { FC } from 'react';
declare type UserTrayProps = {
    ship: {
        patp: string;
        color: string;
    };
    wallet: {
        address: string;
    };
    voice: {
        muted?: boolean;
        status?: 'connected' | 'issue' | 'disconnected';
        chatTitle?: string;
    };
};
export declare const UserTray: FC<UserTrayProps>;
export {};
