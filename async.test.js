import Crypto from "crypto-js";
import { expect, it, beforeAll, beforeEach, afterAll, afterEach } from "vitest";
import { encryptMessage, encryptMessageWithPromise } from "./async";

it("should encrypt a message", async () => {
  const message = "Hello, kia hua?";
  const secret = "12345";
  const encryptedData = await new Promise((res, rej) => {
    encryptMessage(message, secret, (message) => {
      res(message);
    });
  });

  expect(encryptedData).toBeDefined();
});

it("should pass for promise", async () => {
  const message = "Hello, kia hua?";
  const secret = "12345";
  const encryptedData = await encryptMessageWithPromise(message, secret);

  expect(encryptedData).toBeDefined();
});

it("should encrypt a message correctly", async () => {
  const message = "Hello, kia hua?";
  const secret = "12345";
  const encryptedData = await encryptMessageWithPromise(message, secret);

  const decryptedData = Crypto.AES.decrypt(encryptedData, secret).toString(
    Crypto.enc.Utf8
  );
  expect(decryptedData).toBe(message);
});

// beforeAll সবার কাজ শুরুর আগে একবার কাজ করে
beforeAll(() => {
  console.log("okk...");
});

// beforeAll প্রতিটা ফাংশন কাজ শুরুর আগে কাজ করে
beforeEach(() => {
  console.log("okk beforeEach...");
});

// afterAll সবার কাজ শুরুর আগে একবার কাজ করে
afterAll(() => {
  console.log("okk...");
});

// afterAll প্রতিটা ফাংশন কাজ শুরুর আগে কাজ করে
afterEach(() => {
  console.log("okk afterEach...");
});
