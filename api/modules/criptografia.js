const crypto = require("crypto");

// Defining key
//const key = crypto.randomBytes(32);

//o key deve ter 32 digitos
const key = "AD7AtABABWJaJUS8DAS7DS7A63HeJAHm";

class criptografia {
    encrypt(texto) {
        // Defining randon iv
        const iv = crypto.randomBytes(16);
        // Creating Cipheriv with its parameter
        let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
        // Updating text
        let encrypted = cipher.update(texto);
        // Using concatenation
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        //  iv and encrypted data
        let encryptedData = {
            iv: iv.toString("hex"),
            encryptedData: encrypted.toString("hex"),
        };
        // Converting to JSON
        encryptedData = JSON.stringify(encryptedData);
        // Converting to Buffer
        encryptedData = Buffer.from(encryptedData, "utf8").toString("hex");
        // Returning encrypted data
        return encryptedData;
    }

    async descrypt(texto) {
        // Converting texto to Buffer
        texto = Buffer.from(texto, "hex").toString("utf8");
        // Converting to Buffer
        texto = Buffer.from(texto);
        // Converting to JSON
        texto = JSON.parse(texto);
        // Defining iv
        let iv = Buffer.from(texto.iv, "hex");
        // Creating Cipheriv with its parameter
        let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
        // Updating text
        let decrypted = decipher.update(texto.encryptedData, "hex", "utf8");
        // Using concatenation
        decrypted += decipher.final("utf8");
        // Returning decrypted data
        return decrypted;
    }
}

module.exports = criptografia;