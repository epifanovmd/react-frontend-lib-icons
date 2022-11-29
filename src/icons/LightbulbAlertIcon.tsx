import React, { FC, memo } from 'react';
import LightbulbAlertSvg from '../svg/lightbulb-alert.svg';

export interface ILightbulbAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbAlertIcon: FC<ILightbulbAlertIconProps> = memo(props => {
  return <LightbulbAlertSvg {...props} />;
});
