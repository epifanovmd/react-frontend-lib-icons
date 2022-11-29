import React, { FC, memo } from 'react';
import WeightKilogramSvg from '../svg/weight-kilogram.svg';

export interface IWeightKilogramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeightKilogramIcon: FC<IWeightKilogramIconProps> = memo(props => {
  return <WeightKilogramSvg {...props} />;
});
