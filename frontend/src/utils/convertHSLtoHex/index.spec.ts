import { describe, it, expect } from "vitest";
import ConvertHSLtoHex from "./index";

describe("ConvertHSLtoHex Unit Test Suites", () => {
  it("should return something", () => {
    expect(
      ConvertHSLtoHex({ hue: 15, saturation: 16, lightness: 19 }),
    ).toBeDefined();
  });

  it("should be return a string", () => {
    expect(
      typeof ConvertHSLtoHex({ hue: 15, saturation: 16, lightness: 19 }),
    ).toBe("string");
  });

  it("should be return the correct color", () => {
    expect(ConvertHSLtoHex({ hue: 12, saturation: 79, lightness: 52 })).toBe(
      "#E54B24",
    );
    expect(ConvertHSLtoHex({ hue: 29, saturation: 60, lightness: 87 })).toBe(
      "#F2DDCA",
    );
    expect(ConvertHSLtoHex({ hue: 216, saturation: 46, lightness: 14 })).toBe(
      "#132034",
    );
    expect(ConvertHSLtoHex({ hue: 235, saturation: 10, lightness: 23 })).toBe(
      "#353641",
    );
  });
});
