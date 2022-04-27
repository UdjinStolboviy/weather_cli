import { homedir } from "os";
import {
  join,
  basename,
  dirname,
  extname,
  relative,
  isAbsolute,
  resolve,
  sep,
} from "path";

import {
  writeFile,
  readFile,
  existsSync,
  mkdirSync,
  readdirSync,
  statSync,
  promises,
} from "fs";

const filePath = join(homedir(), "weather-data.json");

// export const saveKeyValue = (key, value) => {
//   console.log(basename(filePath));
//   console.log(dirname(filePath));
//   console.log(extname(filePath));
//   console.log(relative(filePath, dirname(filePath)));
//   console.log(isAbsolute(filePath));
//   console.log(resolve(".."));
//   console.log(sep);
//   //   const data = {};
//   //   data[key] = value;
//   //   return storage.set(data);
// };

export const TOKEN_DICTIONARY = { token: "token", city: "city" };

export const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }

  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

export const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (err) {
    return false;
  }
};
