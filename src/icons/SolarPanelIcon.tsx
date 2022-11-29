import React, { FC, memo } from 'react';
import SolarPanelSvg from '../svg/solar-panel.svg';

export interface ISolarPanelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SolarPanelIcon: FC<ISolarPanelIconProps> = memo(props => {
  return <SolarPanelSvg {...props} />;
});
