import { it, describe, expect } from "vitest";
import { getPath } from ".";

describe("getPath Unit Test Suite", () => {
  it("should be render the path without the first character", () => {
    expect(getPath("./public/assets/img/logos/blogr.svg")).toBe(
      "/public/assets/img/logos/blogr.svg",
    );
    expect(getPath("./public/assets/img/logos/coffeeroasters.svg")).toBe(
      "/public/assets/img/logos/coffeeroasters.svg",
    );
    expect(getPath("./public/assets/img/logos/crowdfund.svg")).toBe(
      "/public/assets/img/logos/crowdfund.svg",
    );
  });
});
