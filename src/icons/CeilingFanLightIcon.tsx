import React, { FC, memo } from 'react';
import CeilingFanLightSvg from '../svg/ceiling-fan-light.svg';

export interface ICeilingFanLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CeilingFanLightIcon: FC<ICeilingFanLightIconProps> = memo(props => {
  return <CeilingFanLightSvg {...props} />;
});
