import React, { FC, memo } from 'react';
import KeyboardTabSvg from '../svg/keyboard-tab.svg';

export interface IKeyboardTabIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardTabIcon: FC<IKeyboardTabIconProps> = memo(props => {
  return <KeyboardTabSvg {...props} />;
});
