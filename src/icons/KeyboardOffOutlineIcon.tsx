import React, { FC, memo } from 'react';
import KeyboardOffOutlineSvg from '../svg/keyboard-off-outline.svg';

export interface IKeyboardOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardOffOutlineIcon: FC<IKeyboardOffOutlineIconProps> = memo(props => {
  return <KeyboardOffOutlineSvg {...props} />;
});
