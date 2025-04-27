import {NoXsMediaSize, TMediaSize} from '../types';
import useMedia from './useMedia';
import {JSX} from 'react';


interface IProps {
    children: (mediaSize: TMediaSize) => JSX.Element;
    sizes?: NoXsMediaSize[],
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
