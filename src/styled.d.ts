import 'styled-components';

import {themeName} from './config';
import {IGridSetting} from './types';

declare module 'styled-components' {
  export interface DefaultTheme {
    [themeName]: IGridSetting
  }
} 