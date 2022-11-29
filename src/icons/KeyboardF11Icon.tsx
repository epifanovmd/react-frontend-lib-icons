import React, { FC, memo } from 'react';
import KeyboardF11Svg from '../svg/keyboard-f11.svg';

export interface IKeyboardF11IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF11Icon: FC<IKeyboardF11IconProps> = memo(props => {
  return <KeyboardF11Svg {...props} />;
});
