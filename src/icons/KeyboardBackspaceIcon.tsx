import React, { FC, memo } from 'react';
import KeyboardBackspaceSvg from '../svg/keyboard-backspace.svg';

export interface IKeyboardBackspaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardBackspaceIcon: FC<IKeyboardBackspaceIconProps> = memo(props => {
  return <KeyboardBackspaceSvg {...props} />;
});
