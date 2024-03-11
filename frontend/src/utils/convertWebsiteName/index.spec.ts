import { describe, it, expect } from "vitest";
import { convertWebsiteName } from "./index";

describe("convertWebsiteName Unit Test Suites", () => {
  it("should return something", () => {
    expect(convertWebsiteName("https://example.com/scoot")).toBeDefined();
  });

  it("should convert the entire website into the defined pattern", () => {
    expect(convertWebsiteName("https://example.com/scoot")).toBe("scoot.com");
    expect(convertWebsiteName("https://example.com/pod")).toBe("pod.com");
    expect(convertWebsiteName("https://example.com/crowdfund")).toBe(
      "crowdfund.com",
    );
    expect(convertWebsiteName("https://example.com/coffeeroasters")).toBe(
      "coffeeroasters.com",
    );
  });
});
