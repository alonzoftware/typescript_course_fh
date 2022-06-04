"use strict";
(() => {
    console.log("Data types - NUMBERS");
    console.log("==============================");
    const heroes = 55;
    let villians = 25;
    villians = Number("25A"); //NaN is considered a NUMBER
    console.log({ villians });
})();
