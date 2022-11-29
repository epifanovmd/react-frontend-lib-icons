import React, { FC, memo } from 'react';
import BedDoubleOutlineSvg from '../svg/bed-double-outline.svg';

export interface IBedDoubleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedDoubleOutlineIcon: FC<IBedDoubleOutlineIconProps> = memo(props => {
  return <BedDoubleOutlineSvg {...props} />;
});
