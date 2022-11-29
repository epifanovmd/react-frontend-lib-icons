import React, { FC, memo } from 'react';
import VacuumSvg from '../svg/vacuum.svg';

export interface IVacuumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VacuumIcon: FC<IVacuumIconProps> = memo(props => {
  return <VacuumSvg {...props} />;
});
