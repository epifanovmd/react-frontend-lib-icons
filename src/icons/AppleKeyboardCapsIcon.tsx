import React, { FC, memo } from 'react';
import AppleKeyboardCapsSvg from '../svg/apple-keyboard-caps.svg';

export interface IAppleKeyboardCapsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppleKeyboardCapsIcon: FC<IAppleKeyboardCapsIconProps> = memo(props => {
  return <AppleKeyboardCapsSvg {...props} />;
});
