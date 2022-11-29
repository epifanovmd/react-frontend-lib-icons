import React, { FC, memo } from 'react';
import KeyboardF4Svg from '../svg/keyboard-f4.svg';

export interface IKeyboardF4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF4Icon: FC<IKeyboardF4IconProps> = memo(props => {
  return <KeyboardF4Svg {...props} />;
});
