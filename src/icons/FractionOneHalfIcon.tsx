import React, { FC, memo } from 'react';
import FractionOneHalfSvg from '../svg/fraction-one-half.svg';

export interface IFractionOneHalfIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FractionOneHalfIcon: FC<IFractionOneHalfIconProps> = memo(props => {
  return <FractionOneHalfSvg {...props} />;
});
