import React, { FC, memo } from 'react';
import KeyboardReturnSvg from '../svg/keyboard-return.svg';

export interface IKeyboardReturnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardReturnIcon: FC<IKeyboardReturnIconProps> = memo(props => {
  return <KeyboardReturnSvg {...props} />;
});
