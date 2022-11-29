import React, { FC, memo } from 'react';
import KeyboardOffSvg from '../svg/keyboard-off.svg';

export interface IKeyboardOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardOffIcon: FC<IKeyboardOffIconProps> = memo(props => {
  return <KeyboardOffSvg {...props} />;
});
