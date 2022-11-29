import React, { FC, memo } from 'react';
import AppleKeyboardControlSvg from '../svg/apple-keyboard-control.svg';

export interface IAppleKeyboardControlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppleKeyboardControlIcon: FC<IAppleKeyboardControlIconProps> = memo(props => {
  return <AppleKeyboardControlSvg {...props} />;
});
