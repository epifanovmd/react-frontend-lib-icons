import React, { FC, memo } from 'react';
import KeyboardF8Svg from '../svg/keyboard-f8.svg';

export interface IKeyboardF8IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF8Icon: FC<IKeyboardF8IconProps> = memo(props => {
  return <KeyboardF8Svg {...props} />;
});
