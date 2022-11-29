import React, { FC, memo } from 'react';
import BusSchoolSvg from '../svg/bus-school.svg';

export interface IBusSchoolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusSchoolIcon: FC<IBusSchoolIconProps> = memo(props => {
  return <BusSchoolSvg {...props} />;
});
