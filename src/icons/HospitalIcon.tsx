import React, { FC, memo } from 'react';
import HospitalSvg from '../svg/hospital.svg';

export interface IHospitalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HospitalIcon: FC<IHospitalIconProps> = memo(props => {
  return <HospitalSvg {...props} />;
});
