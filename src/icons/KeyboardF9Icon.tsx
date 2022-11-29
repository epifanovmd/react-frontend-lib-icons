import React, { FC, memo } from 'react';
import KeyboardF9Svg from '../svg/keyboard-f9.svg';

export interface IKeyboardF9IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF9Icon: FC<IKeyboardF9IconProps> = memo(props => {
  return <KeyboardF9Svg {...props} />;
});
