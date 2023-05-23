import type { BaseColor } from '../colors';

export interface GeneralCssVariables {
    textColor: {
        'general-default': BaseColor;
        'general-inverted': BaseColor;
    };
    backgroundColor: {
        'general-default': BaseColor;
        'general-inverted': BaseColor;
    };
    borderColor: {
        'general-default': BaseColor;
    };
}
