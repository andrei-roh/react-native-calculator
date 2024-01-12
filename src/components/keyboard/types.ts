import { PropsWithChildren } from 'react';
import { Action, Keyboard } from '../../types';

export type KeyboardProps = PropsWithChildren<{
  keyboardData: Keyboard[];
  handler: (type: Action, value: string) => void;
  isInitialState: boolean;
  isRadians?: boolean;
  isMemoryChanged?: boolean;
}>;
