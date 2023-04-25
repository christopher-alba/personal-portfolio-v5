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
      brown3Overlay: string;
      brown1Hover: string;
      brown2Hover: string;
      brown3Hover: string;
      brown4Hover: string;
      brown5Hover: string;
      yellow1: string;
      bold: string;
      lowkey: string;
    };
  }
}
