import React, { FC, memo } from 'react';
import KeyboardCloseOutlineSvg from '../svg/keyboard-close-outline.svg';

export interface IKeyboardCloseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardCloseOutlineIcon: FC<IKeyboardCloseOutlineIconProps> = memo(props => {
  return <KeyboardCloseOutlineSvg {...props} />;
});
