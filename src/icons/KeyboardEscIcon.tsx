import React, { FC, memo } from 'react';
import KeyboardEscSvg from '../svg/keyboard-esc.svg';

export interface IKeyboardEscIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardEscIcon: FC<IKeyboardEscIconProps> = memo(props => {
  return <KeyboardEscSvg {...props} />;
});
