import React, { FC, memo } from 'react';
import DoctorSvg from '../svg/doctor.svg';

export interface IDoctorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DoctorIcon: FC<IDoctorIconProps> = memo(props => {
  return <DoctorSvg {...props} />;
});
