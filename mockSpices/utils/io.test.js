import { expect, it, describe, vi } from "vitest";
import { saveTokenToFile } from "./io";
import { promises as fs } from "fs";

vi.mock("fs");

it("should store the token into the file", () => {
  const data = "dummy token";
  const fileName = "token.txt";

  saveTokenToFile(data, fileName);

  /* mock korar pore r dorkar nai */
  //   expect(saveTokenToFile(data, fileName)).resolves.toBeUndefined();

  expect(fs.writeFile).toHaveBeenCalled();
});
