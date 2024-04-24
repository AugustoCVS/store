import 'styled-components'
import { defaultTheme } from '@/src/styles/themes/defaultThemes'

type Theme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}