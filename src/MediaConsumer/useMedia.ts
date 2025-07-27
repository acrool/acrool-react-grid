import {useCallback, useEffect, useRef,useState} from 'react';
import {useTheme} from 'styled-components';

import {themeName} from '../config';
import {TMediaSize} from '../types';

/**
 * 防抖 hook
 * @param callback 要執行的回調函數
 * @param delay 延遲時間（毫秒）
 */
const useDebounce = (callback: () => void, delay: number) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(callback, delay);
    }, [callback, delay]);
};

/**
 * 媒體查詢 hook
 * @param debounceDelay 防抖延遲時間（毫秒），預設為 150ms
 * @returns 包含 isIn(size) 方法的物件
 */
const useMedia = (debounceDelay: number = 150) => {
    const theme = useTheme();
    const breakpoints = theme[themeName]?.gridBreakpoints;
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth ?? 0);

    // 初始化窗口寬度
    useEffect(() => {
        handleResize();
    }, []);

    const handleResize = useCallback(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
        }
    }, []);

    const debouncedHandleResize = useDebounce(handleResize, debounceDelay);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.addEventListener('resize', debouncedHandleResize);
        return () => window.removeEventListener('resize', debouncedHandleResize);
    }, [debouncedHandleResize]);

    /**
     * 檢查當前尺寸是否在指定斷點範圍內
     * @param size 要檢查的斷點尺寸
     * @returns 如果當前尺寸符合斷點範圍則回傳 true
     */
    const eq = useCallback((size: TMediaSize): boolean => {
        if (!breakpoints || windowWidth === 0) return false;

        const width = windowWidth;

        switch (size) {
        case 'sm':
            return width >= breakpoints.sm;
        case 'md':
            return width >= breakpoints.md;
        case 'lg':
            return width >= breakpoints.lg;
        case 'xl':
            return width >= breakpoints.xl;
        case 'xxl':
            return width >= breakpoints.xxl;
        default:
            return true;
        }
    }, [breakpoints, windowWidth]);

    return {eq};
};

export default useMedia;
