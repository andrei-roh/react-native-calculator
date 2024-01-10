import { initialState } from '../constants';

export const getMemoryCompare = (
  memory: string,
  comparableMemory = initialState.memory,
) => memory.localeCompare(comparableMemory) !== 0;
