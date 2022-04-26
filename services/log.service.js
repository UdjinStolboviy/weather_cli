import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + " " + error);
};

export const printSuccess = (message) => {
  console.log(chalk.bgGreen("SUCCESS") + " " + message);
};

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("HELP")}
        not parameters wather city
        -s show city weather
        -h show help
        -t show token
      `
  );
};
