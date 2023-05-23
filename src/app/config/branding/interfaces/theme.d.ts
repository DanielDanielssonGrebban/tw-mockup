import type { GeneralCssVariables } from './general';
import type { HeaderCssVariables } from './header';

export interface Theme extends GeneralCssVariables, HeaderCssVariables {}

export type ThemeKeys = keyof Theme;

export type ThemeValues = Theme[ThemeKeys];
