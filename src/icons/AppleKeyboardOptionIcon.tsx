import React, { FC, memo } from 'react';
import AppleKeyboardOptionSvg from '../svg/apple-keyboard-option.svg';

export interface IAppleKeyboardOptionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppleKeyboardOptionIcon: FC<IAppleKeyboardOptionIconProps> = memo(props => {
  return <AppleKeyboardOptionSvg {...props} />;
});
