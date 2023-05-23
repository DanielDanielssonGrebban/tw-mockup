export const colorsCssVariables = {
    '--color-base-black': '#000000',
    '--color-base-white': '#FFFFFF',
    '--color-base-brand-grey-neutral': '#999999',
    '--color-base-brand-grey-1': '#595959',
    '--color-base-brand-grey-2': '#E3E3E3',
    '--color-base-brand-grey-3': '#EBEBEB',
    '--color-base-orange': '#ff6600',
    '--color-base-brand-blue': '#468faf',
    '--color-base-xmas-red': '#bb2528',
    '--color-base-xmas-brown': '#5d2b2c',
    '--color-base-xmas-green': '#1a8e1a',
    '--color-base-xmas-gold': '#e6b800',
};

export type BaseColor = `var(${keyof typeof colorsCssVariables})`;
