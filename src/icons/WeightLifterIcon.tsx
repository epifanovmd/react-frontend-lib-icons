import React, { FC, memo } from 'react';
import WeightLifterSvg from '../svg/weight-lifter.svg';

export interface IWeightLifterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeightLifterIcon: FC<IWeightLifterIconProps> = memo(props => {
  return <WeightLifterSvg {...props} />;
});
