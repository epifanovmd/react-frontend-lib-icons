import React, { FC, memo } from 'react';
import BullseyeArrowSvg from '../svg/bullseye-arrow.svg';

export interface IBullseyeArrowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BullseyeArrowIcon: FC<IBullseyeArrowIconProps> = memo(props => {
  return <BullseyeArrowSvg {...props} />;
});
