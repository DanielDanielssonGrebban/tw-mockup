import type { BaseColor } from '../colors';

export interface HeaderCssVariables {
    textColor: {
        'header-1': BaseColor;
        'header-2': BaseColor;
        'banner': BaseColor;
    };
    backgroundColor: {
        'header-1': BaseColor;
        'header-2': BaseColor;
        'header-search': BaseColor;
        'banner': BaseColor;
    };
    borderColor: {
        'header-1': BaseColor;
    };
    spacing: {
        'header-height': string;
    };
}
