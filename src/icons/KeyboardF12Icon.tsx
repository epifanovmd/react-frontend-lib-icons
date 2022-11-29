import React, { FC, memo } from 'react';
import KeyboardF12Svg from '../svg/keyboard-f12.svg';

export interface IKeyboardF12IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF12Icon: FC<IKeyboardF12IconProps> = memo(props => {
  return <KeyboardF12Svg {...props} />;
});
