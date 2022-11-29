import React, { FC, memo } from 'react';
import WeightPoundSvg from '../svg/weight-pound.svg';

export interface IWeightPoundIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeightPoundIcon: FC<IWeightPoundIconProps> = memo(props => {
  return <WeightPoundSvg {...props} />;
});
