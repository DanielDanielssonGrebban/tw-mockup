import type { HeaderCssVariables } from '../../interfaces/header';

/* Variable format:
 * --[context]-[component]-?[state]
 * Eg. button-default-active, header-search, etc.
 */

export const headerCssVariables: HeaderCssVariables = {
    textColor: {
        'header-1': 'var(--color-base-white)',
        'header-2': 'var(--color-base-brand-grey-1)',
        'banner': 'var(--color-base-black)',
    },
    backgroundColor: {
        'header-1': 'var(--color-base-xmas-red)',
        'header-2': 'var(--color-base-brand-grey-1)',
        'header-search': 'var(--color-base-brand-grey-1)',
        'banner': 'var(--color-base-black)',
    },
    borderColor: {
        'header-1': 'var(--color-base-white)',
    },
    spacing: {
        'header-height': '72px',
    },
};
