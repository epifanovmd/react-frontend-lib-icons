import React, { FC, memo } from 'react';
import BedOutlineSvg from '../svg/bed-outline.svg';

export interface IBedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedOutlineIcon: FC<IBedOutlineIconProps> = memo(props => {
  return <BedOutlineSvg {...props} />;
});
