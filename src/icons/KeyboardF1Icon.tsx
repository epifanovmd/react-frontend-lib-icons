import React, { FC, memo } from 'react';
import KeyboardF1Svg from '../svg/keyboard-f1.svg';

export interface IKeyboardF1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardF1Icon: FC<IKeyboardF1IconProps> = memo(props => {
  return <KeyboardF1Svg {...props} />;
});
