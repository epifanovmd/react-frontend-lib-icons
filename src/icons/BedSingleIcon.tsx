import React, { FC, memo } from 'react';
import BedSingleSvg from '../svg/bed-single.svg';

export interface IBedSingleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedSingleIcon: FC<IBedSingleIconProps> = memo(props => {
  return <BedSingleSvg {...props} />;
});
