import { describe, it, expect } from "vitest";
import ExtractHSLValue from "./index";

describe("ExtractHSLValues Unit Test Suites", () => {
  it("should render something", () => {
    expect(ExtractHSLValue("hsl(152,15%,26%)")).toBeDefined();
  });

  it("should return an object", () => {
    expect(typeof ExtractHSLValue("hsl(12, 79%, 52%)")).toStrictEqual("object");
  });

  it("should return the correct value", () => {
    expect(ExtractHSLValue("hsl(12, 79%, 52%)")).toStrictEqual({
      hue: 12,
      saturation: 79,
      lightness: 52,
    });

    expect(ExtractHSLValue("hsl(125, 9%, 23%)")).toStrictEqual({
      hue: 125,
      saturation: 9,
      lightness: 23,
    });
  });
});
