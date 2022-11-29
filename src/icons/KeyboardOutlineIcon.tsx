import React, { FC, memo } from 'react';
import KeyboardOutlineSvg from '../svg/keyboard-outline.svg';

export interface IKeyboardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardOutlineIcon: FC<IKeyboardOutlineIconProps> = memo(props => {
  return <KeyboardOutlineSvg {...props} />;
});
