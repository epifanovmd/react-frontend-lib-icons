import React, { FC, memo } from 'react';
import HospitalMarkerSvg from '../svg/hospital-marker.svg';

export interface IHospitalMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HospitalMarkerIcon: FC<IHospitalMarkerIconProps> = memo(props => {
  return <HospitalMarkerSvg {...props} />;
});
