import React from 'react';
interface IProps {
    id: any;
    preventDefault?: boolean;
    style?: any;
    isOpen: boolean;
    clickableRef?: any;
    onClose: (...args: any) => any;
}
interface IState {
    isOpen?: boolean;
}
export declare class Menu extends React.PureComponent<IProps, IState> {
    static defaultProps: {
        isOpen: boolean;
        id: number;
        preventDefault: boolean;
    };
    menuRef: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: any) => void;
    render(): JSX.Element;
}
export default Menu;
