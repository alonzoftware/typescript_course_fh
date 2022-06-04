(() => {
  console.log("Data types - BOOLEANS");
  console.log("==============================");

  let isBatman: boolean;
  let isSuperman: boolean;
  isSuperman = true && false;
  isBatman = isSuperman ? true : false;

  console.log({ isBatman, isSuperman });
})();
