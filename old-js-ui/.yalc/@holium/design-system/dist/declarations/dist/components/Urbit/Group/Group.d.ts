export declare type GroupProps = {
    patp: string;
    name: string;
    color?: string;
    size?: 'medium' | 'small';
    menuOptions?: Array<{
        label: string;
        value: string;
    }>;
    clickable: boolean;
    sigil?: boolean;
    trailingInfo?: 'Type' | 'Notification';
    entity: 'Group' | 'DAO';
    type?: boolean;
    notification?: number;
    infoBeneath?: 'Link' | 'Participant';
    link?: string;
    participantNumber?: number | 0;
    participantType?: string | 'participants';
    image?: string;
    customColour?: string;
    noAttachments?: boolean;
};
export declare const Group: any;
