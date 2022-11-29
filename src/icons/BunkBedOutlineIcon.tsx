import React, { FC, memo } from 'react';
import BunkBedOutlineSvg from '../svg/bunk-bed-outline.svg';

export interface IBunkBedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BunkBedOutlineIcon: FC<IBunkBedOutlineIconProps> = memo(props => {
  return <BunkBedOutlineSvg {...props} />;
});
