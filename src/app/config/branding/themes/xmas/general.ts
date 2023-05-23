import type { GeneralCssVariables } from '../../interfaces/general';

/* Variable format:
 * --[context]-[component]-?[state]
 * Eg. button-default-active, header-search, etc.
 */

export const generalCssVariables: GeneralCssVariables = {
    textColor: {
        'general-default': 'var(--color-base-xmas-brown)',
        'general-inverted': 'var(--color-base-xmas-gold)',
    },
    backgroundColor: {
        'general-default': 'var(--color-base-xmas-green)',
        'general-inverted': 'var(--color-base-xmas-brown)',
    },
    borderColor: {
        'general-default': 'var(--color-base-xmas-gold)',
    },
};
