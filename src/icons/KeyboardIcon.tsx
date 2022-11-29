import React, { FC, memo } from 'react';
import KeyboardSvg from '../svg/keyboard.svg';

export interface IKeyboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardIcon: FC<IKeyboardIconProps> = memo(props => {
  return <KeyboardSvg {...props} />;
});
