import React, { FC, memo } from 'react';
import BunkBedSvg from '../svg/bunk-bed.svg';

export interface IBunkBedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BunkBedIcon: FC<IBunkBedIconProps> = memo(props => {
  return <BunkBedSvg {...props} />;
});
