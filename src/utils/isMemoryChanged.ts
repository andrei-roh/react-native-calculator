import { INITIAL_STATE } from '../constants';

export const isMemoryChanged = (
  memory: string,
  comparableMemory = INITIAL_STATE.memory,
) => memory.localeCompare(comparableMemory) !== 0;
