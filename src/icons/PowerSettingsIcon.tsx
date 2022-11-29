import React, { FC, memo } from 'react';
import PowerSettingsSvg from '../svg/power-settings.svg';

export interface IPowerSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSettingsIcon: FC<IPowerSettingsIconProps> = memo(props => {
  return <PowerSettingsSvg {...props} />;
});
