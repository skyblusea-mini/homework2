import { extendTheme, CssVarsProvider } from "@mui/joy"
import palette from "./palette"

export const theme = extendTheme({
  cssVarPrefix: '',
  colorSchemes: {
    light: { palette },
    dark: { palette },
  },
  radius: {
    sm: '12px',
    md: '14px', // 버튼
    lg: '22px', // 기본 메뉴
    xl: '28px', // 메인 하단 네비게이션
  },
})


const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
}

export default MUIThemeProvider;