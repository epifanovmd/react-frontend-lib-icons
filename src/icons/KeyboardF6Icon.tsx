import React, { FC, memo } from 'react';
import KeyboardF6Svg from '../svg/keyboard-f6.svg';

export interface IKeyboardF6IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF6Icon: FC<IKeyboardF6IconProps> = memo(props => {
  return <KeyboardF6Svg {...props} />;
});
