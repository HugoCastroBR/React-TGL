import { css } from 'styled-components'




import FreeSansBold from './fonts/FreeSansBold.ttf'
import WarowniaUltra from  './fonts/WarowniaUltra.otf'
import FreeSansRegular from './fonts/FreeSansRegular.ttf'
import NimbusSansLight from './fonts/NimbusSansLight.ttf'
import NimbusSansUltraLight from './fonts/NimbusSansUltraLight.ttf'
import PragmaticaExtraLight from './fonts/PragmaticaExtraLight.ttf'
import PragmaticaMedium from './fonts/PragmaticaMedium.otf'




export const Fonts = css`
    @font-face{
        font-family: "Helvetica Neue Ultra Light";
        src: url(${NimbusSansUltraLight});
        }
    @font-face{
        font-family: "Helvetica Neue Thin";
        src: url(${PragmaticaExtraLight});
    }
    @font-face{
        font-family: "Helvetica Neue Light";
        src: url(${NimbusSansLight});
    }
    @font-face{
        font-family: "Helvetica Neue Roman";
        src: url(${FreeSansRegular});
    }
    @font-face{
        font-family: "Helvetica Neue Medium";
        src: url(${PragmaticaMedium});
    }
    @font-face{
        font-family: "Helvetica Neue Bold";
        src: url(${FreeSansBold});
    }
    @font-face{
        font-family: "Helvetica Neue Heavy";
        src: url(${WarowniaUltra});
    }

`

export default Fonts;