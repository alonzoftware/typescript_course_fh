"use strict";
(() => {
    var _a;
    console.log("Data types - STRINGS");
    console.log("==============================");
    const batman = "Batman";
    const greenLantern = "Green Lantern";
    const blackVolcano = `Black Volcano`;
    console.log(`I'am ${batman}`);
    const char9toUpper = ((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "Char 9 Not Exist";
    console.log({ char9toUpper });
})();
