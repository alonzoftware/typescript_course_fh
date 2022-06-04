(() => {
  console.log("Data types - NUMBERS");
  console.log("==============================");
  const heroes: number = 55;
  let villians: number = 25;

  villians = Number("25A"); //NaN is considered a NUMBER
  console.log({ villians });
})();
