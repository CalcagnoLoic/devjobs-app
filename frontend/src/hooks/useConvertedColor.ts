import { useState, useEffect } from "react";

import convertHSLtoHex from "../utils/convertHSLtoHex";
import extractHSLValue from "../utils/extractHSLValue";

export const useConvertedColor = (hexValue: string) => {
  const [convertedColor, setConvertedColor] = useState<string>("");

  useEffect(() => {
    const hslValues = extractHSLValue(hexValue);

    if (hslValues) {
      const { hue, saturation, lightness } = hslValues;
      const hexColor = convertHSLtoHex({ hue, saturation, lightness });
      setConvertedColor(hexColor);
    }
  }, [hexValue]);

  return convertedColor;
};
