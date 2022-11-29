import React, { FC, memo } from 'react';
import KeyboardSettingsOutlineSvg from '../svg/keyboard-settings-outline.svg';

export interface IKeyboardSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardSettingsOutlineIcon: FC<IKeyboardSettingsOutlineIconProps> = memo(props => {
  return <KeyboardSettingsOutlineSvg {...props} />;
});
