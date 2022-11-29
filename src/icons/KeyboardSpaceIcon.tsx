import React, { FC, memo } from 'react';
import KeyboardSpaceSvg from '../svg/keyboard-space.svg';

export interface IKeyboardSpaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardSpaceIcon: FC<IKeyboardSpaceIconProps> = memo(props => {
  return <KeyboardSpaceSvg {...props} />;
});
