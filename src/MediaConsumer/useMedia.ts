import {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';

import {themeName} from '../config';
import {NoXsMediaSize, TMediaSize} from '../types';

/**
 * 取得目前尺寸
 * @param sizes 要監聽的尺寸陣列，如果未提供則監聽所有尺寸
 */
const useMedia = (sizes?: NoXsMediaSize[]) => {
    const theme = useTheme();
    const breakpoints = theme[themeName]?.gridBreakpoints;

    const getResize = () => {
        const width = window.innerWidth;
        let size: TMediaSize = 'xs';

        if ((!sizes || sizes?.includes('xxl')) && width >= breakpoints.xxl) {
            size = 'xxl';
        } else if ((!sizes || sizes?.includes('xl')) && width >= breakpoints.xl) {
            size = 'xl';
        } else if ((!sizes || sizes?.includes('lg')) && width >= breakpoints.lg) {
            size = 'lg';
        } else if ((!sizes || sizes?.includes('md')) && width >= breakpoints.md) {
            size = 'md';
        } else if ((!sizes || sizes?.includes('sm')) && width >= breakpoints.sm) {
            size = 'sm';
        }

        return size;
    };

    const [currentSize, setCurrentSize] = useState<TMediaSize>(getResize());

    useEffect(() => {
        const handleResize = () => {
            const size = getResize();
            setCurrentSize(size);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoints, sizes]);

    return currentSize;
};

export default useMedia;
