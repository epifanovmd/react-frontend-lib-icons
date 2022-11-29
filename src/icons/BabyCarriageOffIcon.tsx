import React, { FC, memo } from 'react';
import BabyCarriageOffSvg from '../svg/baby-carriage-off.svg';

export interface IBabyCarriageOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BabyCarriageOffIcon: FC<IBabyCarriageOffIconProps> = memo(props => {
  return <BabyCarriageOffSvg {...props} />;
});
