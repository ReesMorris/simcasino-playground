import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    site: {
      background: string;
    };
    colors: {
      primary: string;
      secondary: string;
    };
    card: {
      background: string;
      shadow: string;
    };
  }
}
