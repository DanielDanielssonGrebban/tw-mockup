import { headerCssVariables } from './header';
import { generalCssVariables } from './general';
import { modulesCssVariables } from './modules';
import type { Theme, ThemeKeys, ThemeValues } from '../../interfaces/theme';

const variables = [headerCssVariables, generalCssVariables];

// type MergeInterfaces<T, U> = T & U extends infer O
//     ? { [K in keyof O]: K extends keyof U ? U[K] : K extends keyof T ? T[K] : never }
//     : never;

// function mergeInterfaces<T, U>(interface1: T, interface2: U): MergeInterfaces<T, U> {
//     return { ...interface1, ...interface2 };
// }

// // Example usage
// const mergedInterface = mergeInterfaces<HeaderCssVariables, GeneralCssVariables>(
//     {} as HeaderCssVariables,
//     {} as GeneralCssVariables
// );

// const result: ObjectWithColors = variables.reduce((mergedObj, obj) => {
//     for (const prop in obj) {
//         if (mergedObj[prop]) {
//             mergedObj[prop] = { ...mergedObj[prop], ...obj[prop] };
//         } else {
//             mergedObj[prop] = { ...obj[prop] };
//         }
//     }
//     return mergedObj;
// }, {} as ObjectWithColors);

const staticVariables = {
    textColor: {
        ...headerCssVariables?.textColor,
        ...generalCssVariables?.textColor,
        ...modulesCssVariables?.textColor,
    },
    backgroundColor: {
        ...headerCssVariables?.backgroundColor,
        ...generalCssVariables?.backgroundColor,
        ...modulesCssVariables?.backgroundColor,
    },
    borderColor: {
        ...headerCssVariables?.borderColor,
        ...generalCssVariables?.borderColor,
    },
    spacing: {
        ...headerCssVariables?.spacing,
    },
};

const defaultTheme = {
    statics: staticVariables,
};

export default defaultTheme;
