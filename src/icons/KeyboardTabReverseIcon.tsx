import React, { FC, memo } from 'react';
import KeyboardTabReverseSvg from '../svg/keyboard-tab-reverse.svg';

export interface IKeyboardTabReverseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardTabReverseIcon: FC<IKeyboardTabReverseIconProps> = memo(props => {
  return <KeyboardTabReverseSvg {...props} />;
});
