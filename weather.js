#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError, printWeather } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    return printError("No token provided");
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token saved successfully");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity= async (city) => {
  if (!city.length) {
    return printError("No token provided");
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("CITY saved successfully");
  } catch (error) {
    printError(error.message);
  }
};

const getForecast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city,);
    const forecast = await getWeather(city);
    printWeather(forecast, forecast.weather[0].icon);
  } catch (error) {
    if (error?.response?.status === 404) {
    printError("City not found");
  } else if (error?.response?.status === 401) {
    printError("401 Unauthorized");
  } else {
    printError(error.message);
  }
}
};
const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    console.log(
      `
      Usage: weather city
      `
    );
     return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
    return getForecast();
};

initCLI();
