import React, { FC, memo } from 'react';
import HeatPumpOutlineSvg from '../svg/heat-pump-outline.svg';

export interface IHeatPumpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeatPumpOutlineIcon: FC<IHeatPumpOutlineIconProps> = memo(props => {
  return <HeatPumpOutlineSvg {...props} />;
});
