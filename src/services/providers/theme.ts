import { Storage } from "@/services/providers";

export class Theme {
  
    public static setTheme(themeValue: any) {
        return Storage.setItem("__themeValue", themeValue);
    }

    public static getTheme(): Promise<any> {
        return Storage.getItem("__themeValue");
    }
}
