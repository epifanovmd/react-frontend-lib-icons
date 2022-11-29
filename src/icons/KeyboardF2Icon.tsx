import React, { FC, memo } from 'react';
import KeyboardF2Svg from '../svg/keyboard-f2.svg';

export interface IKeyboardF2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF2Icon: FC<IKeyboardF2IconProps> = memo(props => {
  return <KeyboardF2Svg {...props} />;
});
