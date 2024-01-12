import { initialState } from '../constants';

export const isMemoryChanged = (
  memory: string,
  comparableMemory = initialState.memory,
) => memory.localeCompare(comparableMemory) !== 0;
