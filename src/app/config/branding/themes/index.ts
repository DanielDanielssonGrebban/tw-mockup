import defaultTheme from '../themes/default';
import xmasTheme from '../themes/xmas';

export const themes = {
    default: defaultTheme,
    xmas: xmasTheme,
};

type Theme = keyof typeof themes;

export const setTheme = (theme: Theme) => {
    if (theme in themes) {
        return themes[theme];
    }
    return themes.default;
};

// export const activateTheme = (themeName: string): void => {
//     if (validThemes.indexOf(themeName) === -1) {
//         return;
//     }
//     const theme = themes[themeName];
//     const root = document.documentElement;
//     Object.keys(theme).forEach(key => {
//         const value = theme[key];
//         root.style.setProperty(key, value);
//     });
// };

export default themes;
