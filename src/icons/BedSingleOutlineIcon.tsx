import React, { FC, memo } from 'react';
import BedSingleOutlineSvg from '../svg/bed-single-outline.svg';

export interface IBedSingleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedSingleOutlineIcon: FC<IBedSingleOutlineIconProps> = memo(props => {
  return <BedSingleOutlineSvg {...props} />;
});
