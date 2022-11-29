import React, { FC, memo } from 'react';
import KeyboardF3Svg from '../svg/keyboard-f3.svg';

export interface IKeyboardF3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF3Icon: FC<IKeyboardF3IconProps> = memo(props => {
  return <KeyboardF3Svg {...props} />;
});
