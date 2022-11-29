import React, { FC, memo } from 'react';
import HospitalBoxOutlineSvg from '../svg/hospital-box-outline.svg';

export interface IHospitalBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HospitalBoxOutlineIcon: FC<IHospitalBoxOutlineIconProps> = memo(props => {
  return <HospitalBoxOutlineSvg {...props} />;
});
