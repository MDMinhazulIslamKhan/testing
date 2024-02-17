import Crypto from "crypto-js";

export function encryptMessage(message, key, callback) {
  const encryptedMessage = Crypto.AES.encrypt(message, key).toString();
  callback(encryptedMessage);
}

export function encryptMessageWithPromise(message, key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encryptedMessage = Crypto.AES.encrypt(message, key).toString();
      if (encryptedMessage) {
        resolve(encryptedMessage);
      } else reject(new Error("Failed to encrypt."));
    }, 2500);
  });
}

// encryptMessage("Hello", "123", (message) => {
//   console.log(message);
// });

// encryptMessageWithPromise("Hello", "123").then((message) => {
//   console.log(message);
// });

// encryptMessageWithPromise("Hello kia haal...", "123").then((message) => {
//   const decryptedData = Crypto.AES.decrypt(message, "123").toString(
//     Crypto.enc.Utf8
//   );
//   console.log(decryptedData);
// });
