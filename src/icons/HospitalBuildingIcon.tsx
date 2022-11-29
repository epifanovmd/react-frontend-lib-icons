import React, { FC, memo } from 'react';
import HospitalBuildingSvg from '../svg/hospital-building.svg';

export interface IHospitalBuildingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HospitalBuildingIcon: FC<IHospitalBuildingIconProps> = memo(props => {
  return <HospitalBuildingSvg {...props} />;
});
