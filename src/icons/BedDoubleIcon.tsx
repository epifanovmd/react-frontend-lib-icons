import React, { FC, memo } from 'react';
import BedDoubleSvg from '../svg/bed-double.svg';

export interface IBedDoubleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedDoubleIcon: FC<IBedDoubleIconProps> = memo(props => {
  return <BedDoubleSvg {...props} />;
});
