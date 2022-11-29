import React, { FC, memo } from 'react';
import SolarPanelLargeSvg from '../svg/solar-panel-large.svg';

export interface ISolarPanelLargeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SolarPanelLargeIcon: FC<ISolarPanelLargeIconProps> = memo(props => {
  return <SolarPanelLargeSvg {...props} />;
});
