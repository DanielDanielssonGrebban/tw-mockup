import type { ModulesCssVariables } from '../../interfaces/modules';

/* Variable format:
 * --[context]-[component]-?[state]
 * Eg. button-default-active, header-search, etc.
 */

export const modulesCssVariables: ModulesCssVariables = {
    textColor: {
        'module-discover': 'var(--color-base-white)',
        'module-card-1': 'var(--color-base-black)',
        'module-card-2': 'var(--color-base-white)',
    },
    backgroundColor: {
        'module-discover': 'var(--color-base-xmas-brown)',
        'module-card-1': 'var(--color-base-xmas-red)',
        'module-card-2': 'var(--color-base-xmas-green)',
    },
};
