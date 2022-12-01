import prompts from "prompts";

(async function () {
  const result = await prompts({
    type: "number",
    name: "day",
    message: "Which day to solve?",
  });

  const dayToRunIndexFilePath = `./day-${result.day}/index.ts`;
  require(dayToRunIndexFilePath).solve();
})()
  .then(console.log)
  .catch(console.error);
