import React, { FC, memo } from 'react';
import KeyboardSettingsSvg from '../svg/keyboard-settings.svg';

export interface IKeyboardSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardSettingsIcon: FC<IKeyboardSettingsIconProps> = memo(props => {
  return <KeyboardSettingsSvg {...props} />;
});
