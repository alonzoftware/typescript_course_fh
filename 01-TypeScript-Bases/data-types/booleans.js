"use strict";
(() => {
    console.log("Data types - BOOLEANS");
    console.log("==============================");
    let isBatman;
    let isSuperman;
    isSuperman = true && false;
    isBatman = isSuperman ? true : false;
    console.log({ isBatman, isSuperman });
})();
