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

export const printWeather = (weather, icon) => {
  console.log(
    dedent`${chalk.bgBlue("WEATHER")}
        weather city 
        ${chalk.blue(weather.name)}
        ${chalk.bgRedBright(`${icon} ${weather.weather[0].description}`)}
        temp: ${chalk.bgGreenBright(weather.main.temp)} (feels like: ${chalk.bgCyanBright(weather.main.feels_like)})
        humidity: ${chalk.bgYellow(weather.main.humidity)} %
        speed wind: ${chalk.magenta(weather.wind.speed)} m/s
      `
  );
}