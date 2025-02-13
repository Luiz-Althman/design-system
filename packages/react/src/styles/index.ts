import {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
} from '@althman-ui/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';
//defaultThemeMap precisa ser passado para que o stitches entenda que o themMap ele extende o space para width e height e para que ele não perca a referencia para os outros tokens. Sem isso, se eu aplicar um borderRadius, por exemplo, e der ctrl + espaço, ele não localiza os tokens.

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space',
    },
    theme: {
        colors: colors,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        fonts: fonts,
        lineHeights: lineHeights,
        radii: radii,
        space: space,
    },
});
