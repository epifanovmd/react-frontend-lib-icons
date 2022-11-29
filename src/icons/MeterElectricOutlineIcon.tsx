import React, { FC, memo } from 'react';
import MeterElectricOutlineSvg from '../svg/meter-electric-outline.svg';

export interface IMeterElectricOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MeterElectricOutlineIcon: FC<IMeterElectricOutlineIconProps> = memo(props => {
  return <MeterElectricOutlineSvg {...props} />;
});
