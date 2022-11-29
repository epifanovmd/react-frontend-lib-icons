import React, { FC, memo } from 'react';
import TruckMinusOutlineSvg from '../svg/truck-minus-outline.svg';

export interface ITruckMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckMinusOutlineIcon: FC<ITruckMinusOutlineIconProps> = memo(props => {
  return <TruckMinusOutlineSvg {...props} />;
});
