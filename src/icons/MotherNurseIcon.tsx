import React, { FC, memo } from 'react';
import MotherNurseSvg from '../svg/mother-nurse.svg';

export interface IMotherNurseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotherNurseIcon: FC<IMotherNurseIconProps> = memo(props => {
  return <MotherNurseSvg {...props} />;
});
