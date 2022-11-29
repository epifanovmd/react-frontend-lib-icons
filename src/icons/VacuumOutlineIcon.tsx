import React, { FC, memo } from 'react';
import VacuumOutlineSvg from '../svg/vacuum-outline.svg';

export interface IVacuumOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VacuumOutlineIcon: FC<IVacuumOutlineIconProps> = memo(props => {
  return <VacuumOutlineSvg {...props} />;
});
