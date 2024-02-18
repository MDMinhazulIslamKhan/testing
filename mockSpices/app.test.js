import { expect, it, describe, vi } from "vitest";
import { generateToken } from "./app";

describe("generateToken()", () => {
  it("should execute logger function if passed", () => {
    const loggerFn = vi.fn();
    generateToken(loggerFn);

    expect(loggerFn).toHaveBeenCalled();
  });
});
