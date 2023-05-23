import type { GeneralCssVariables } from '../../interfaces/general';

/* Variable format:
 * --[context]-[component]-?[state]
 * Eg. button-default-active, header-search, etc.
 */

export const generalCssVariables: GeneralCssVariables = {
    textColor: {
        'general-default': 'var(--color-base-black)',
        'general-inverted': 'var(--color-base-white)',
    },
    backgroundColor: {
        'general-default': 'var(--color-base-brand-grey-2)',
        'general-inverted': 'var(--color-base-orange)',
    },
    borderColor: {
        'general-default': 'var(--color-base-brand-grey-neutral)',
    },
};
