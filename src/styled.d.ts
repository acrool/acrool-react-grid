import 'styled-components';
import {IGridSetting} from './types';
import {themeName} from './config';

declare module 'styled-components' {
  export interface DefaultTheme {
    [themeName]: IGridSetting;
  }
} 