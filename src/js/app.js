import json from './parser.js';
import read from './reader.js';
import GameSaving from './gameSaving.js';

let save = new GameSaving();
const gameSave = (async () => {
  try {
    const readResolve = await read();
    const saving = await json(readResolve);
    save = JSON.parse(saving);
    return save;
  } catch (error) {
    throw new Error('Ошибка!');
  }
})();

export default gameSave;
