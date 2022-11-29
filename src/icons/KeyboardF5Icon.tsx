import React, { FC, memo } from 'react';
import KeyboardF5Svg from '../svg/keyboard-f5.svg';

export interface IKeyboardF5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF5Icon: FC<IKeyboardF5IconProps> = memo(props => {
  return <KeyboardF5Svg {...props} />;
});
