import React, { FC, memo } from 'react';
import ApplicationSettingsSvg from '../svg/application-settings.svg';

export interface IApplicationSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationSettingsIcon: FC<IApplicationSettingsIconProps> = memo(props => {
  return <ApplicationSettingsSvg {...props} />;
});
