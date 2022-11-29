import React, { FC, memo } from 'react';
import WindowShutterSettingsSvg from '../svg/window-shutter-settings.svg';

export interface IWindowShutterSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowShutterSettingsIcon: FC<IWindowShutterSettingsIconProps> = memo(props => {
  return <WindowShutterSettingsSvg {...props} />;
});
