import React, { FC, memo } from 'react';
import MopedElectricOutlineSvg from '../svg/moped-electric-outline.svg';

export interface IMopedElectricOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MopedElectricOutlineIcon: FC<IMopedElectricOutlineIconProps> = memo(props => {
  return <MopedElectricOutlineSvg {...props} />;
});
