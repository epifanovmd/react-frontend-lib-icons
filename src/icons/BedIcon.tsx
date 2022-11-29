import React, { FC, memo } from 'react';
import BedSvg from '../svg/bed.svg';

export interface IBedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedIcon: FC<IBedIconProps> = memo(props => {
  return <BedSvg {...props} />;
});
