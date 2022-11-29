import React, { FC, memo } from 'react';
import AppleKeyboardShiftSvg from '../svg/apple-keyboard-shift.svg';

export interface IAppleKeyboardShiftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppleKeyboardShiftIcon: FC<IAppleKeyboardShiftIconProps> = memo(props => {
  return <AppleKeyboardShiftSvg {...props} />;
});
