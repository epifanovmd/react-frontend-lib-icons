import React, { FC, memo } from 'react';
import CarSettingsSvg from '../svg/car-settings.svg';

export interface ICarSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarSettingsIcon: FC<ICarSettingsIconProps> = memo(props => {
  return <CarSettingsSvg {...props} />;
});
