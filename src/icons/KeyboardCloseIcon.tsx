import React, { FC, memo } from 'react';
import KeyboardCloseSvg from '../svg/keyboard-close.svg';

export interface IKeyboardCloseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardCloseIcon: FC<IKeyboardCloseIconProps> = memo(props => {
  return <KeyboardCloseSvg {...props} />;
});
