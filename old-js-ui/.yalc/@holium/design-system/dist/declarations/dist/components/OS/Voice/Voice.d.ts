import { FC } from 'react';
export declare type VoiceProps = {
    muted?: boolean;
    status?: 'connected' | 'issue' | 'disconnected';
    chatTitle?: string;
};
export declare const Voice: FC<VoiceProps>;
