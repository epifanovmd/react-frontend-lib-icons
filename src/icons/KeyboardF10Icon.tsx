import React, { FC, memo } from 'react';
import KeyboardF10Svg from '../svg/keyboard-f10.svg';

export interface IKeyboardF10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF10Icon: FC<IKeyboardF10IconProps> = memo(props => {
  return <KeyboardF10Svg {...props} />;
});
