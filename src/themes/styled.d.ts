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
      heart: string;
    };
    card: {
      background: string;
      shadow: string;
    };
    dropzone: {
      background: string;
      active_border: string;
    };
    ui: {
      border: string;
      border_focus: string;
    };
  }
}
