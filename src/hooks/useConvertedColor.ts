import { useState, useEffect } from "react";

import ConvertHSLtoHex from "../utils/ConvertHSLtoHex";
import ExtractHSLValue from "../utils/ExtractHSLValue";

export const useConvertedColor = (hexValue: string) => {
  const [convertedColor, setConvertedColor] = useState<string>("");

  useEffect(() => {
    const hslValues = ExtractHSLValue(hexValue);

    if (hslValues) {
      const { hue, saturation, lightness } = hslValues;
      const hexColor = ConvertHSLtoHex({ hue, saturation, lightness });
      setConvertedColor(hexColor);
    }
  }, []);

  return convertedColor;
};
