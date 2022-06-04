(() => {
  console.log("Data types - STRINGS");
  console.log("==============================");
  const batman: string = "Batman";
  const greenLantern: string = "Green Lantern";
  const blackVolcano: string = `Black Volcano`;

  console.log(`I'am ${batman}`);
  const char9toUpper: string = batman[10]?.toUpperCase() || "Char 9 Not Exist";

  console.log({ char9toUpper });
})();
