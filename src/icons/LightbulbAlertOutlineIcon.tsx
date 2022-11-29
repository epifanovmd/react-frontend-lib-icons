import React, { FC, memo } from 'react';
import LightbulbAlertOutlineSvg from '../svg/lightbulb-alert-outline.svg';

export interface ILightbulbAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbAlertOutlineIcon: FC<ILightbulbAlertOutlineIconProps> = memo(props => {
  return <LightbulbAlertOutlineSvg {...props} />;
});
