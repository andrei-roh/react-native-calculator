import { PropsWithChildren } from 'react';
import { Action, Data, Orientation } from '../../types';

export type KeyboardProps = PropsWithChildren<{
  orientation: Orientation;
  keyboardPortraitData: Data[];
  handler: (type: Action, value: string) => void;
  isInitialState: boolean;
  isRadians?: boolean;
  isMemory?: boolean;
}>;
