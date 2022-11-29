import React, { FC, memo } from 'react';
import KeyboardF7Svg from '../svg/keyboard-f7.svg';

export interface IKeyboardF7IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF7Icon: FC<IKeyboardF7IconProps> = memo(props => {
  return <KeyboardF7Svg {...props} />;
});
