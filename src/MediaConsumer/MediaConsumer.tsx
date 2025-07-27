import {JSX} from 'react';

import {NoXsMediaSize} from '../types';
import useMedia from './useMedia';


interface IProps {
    children: (eq: (size: NoXsMediaSize) => boolean) => JSX.Element|null
    debounceDelay?: number
}

/**
 * 觀察者取得目前尺寸
 * @param children
 * @param sizes
 */
export const MediaConsumer = ({
    children,
    debounceDelay,
}: IProps) => {
    const {eq} = useMedia(debounceDelay);

    return children(eq);
};

export default MediaConsumer;
