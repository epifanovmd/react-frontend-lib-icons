import React, { FC, memo } from 'react';
import AppleKeyboardCommandSvg from '../svg/apple-keyboard-command.svg';

export interface IAppleKeyboardCommandIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppleKeyboardCommandIcon: FC<IAppleKeyboardCommandIconProps> = memo(props => {
  return <AppleKeyboardCommandSvg {...props} />;
});
