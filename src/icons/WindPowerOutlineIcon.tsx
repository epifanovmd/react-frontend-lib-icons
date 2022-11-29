import React, { FC, memo } from 'react';
import WindPowerOutlineSvg from '../svg/wind-power-outline.svg';

export interface IWindPowerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindPowerOutlineIcon: FC<IWindPowerOutlineIconProps> = memo(props => {
  return <WindPowerOutlineSvg {...props} />;
});
