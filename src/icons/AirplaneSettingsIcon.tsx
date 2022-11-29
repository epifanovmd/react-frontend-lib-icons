import React, { FC, memo } from 'react';
import AirplaneSettingsSvg from '../svg/airplane-settings.svg';

export interface IAirplaneSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneSettingsIcon: FC<IAirplaneSettingsIconProps> = memo(props => {
  return <AirplaneSettingsSvg {...props} />;
});
