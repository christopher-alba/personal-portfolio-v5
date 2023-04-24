// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      brown1: string;
      brown2: string;
      brown3: string;
      brown4: string;
      brown5: string;
      brown1Overlay: string;
      yellow1: string;
      bold: string;
      lowkey: string;
    };
  }
}
