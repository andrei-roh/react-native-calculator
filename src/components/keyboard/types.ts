import { PropsWithChildren } from 'react';
import { Action, IKeyboard } from '../../types';

export type KeyboardProps = PropsWithChildren<{
  keyboardData: IKeyboard[];
  handler: (type: Action, value: string) => void;
  isInitialState: boolean;
  isRadians?: boolean;
  isMemoryChanged?: boolean;
}>;
