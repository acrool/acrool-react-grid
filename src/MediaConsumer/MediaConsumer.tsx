import {TMediaSize} from '../types';
import useMedia from './useMedia';
import {JSX} from 'react';


interface IProps {
    children: (size: TMediaSize) => JSX.Element;
    sizes?: TMediaSize[],
}

/**
 * 觀察者取得目前尺寸
 * @param children
 * @param sizes
 */
export const MediaConsumer = ({
    children,
    sizes
}: IProps) => {
    const currentSize = useMedia(sizes);
    return children(currentSize);
};

export default MediaConsumer;
