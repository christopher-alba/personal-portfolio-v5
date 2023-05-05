// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary1: string;
      primary2: string;
      primary3: string;
      primary4: string;
      secondary1: string;
      secondary2: string;
      tertiary1: string;
      tertiary2: string;
    };
  }
}
