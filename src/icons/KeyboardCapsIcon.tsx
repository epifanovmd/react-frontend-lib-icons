import React, { FC, memo } from 'react';
import KeyboardCapsSvg from '../svg/keyboard-caps.svg';

export interface IKeyboardCapsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardCapsIcon: FC<IKeyboardCapsIconProps> = memo(props => {
  return <KeyboardCapsSvg {...props} />;
});
