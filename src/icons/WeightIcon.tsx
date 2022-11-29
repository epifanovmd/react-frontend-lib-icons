import React, { FC, memo } from 'react';
import WeightSvg from '../svg/weight.svg';

export interface IWeightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeightIcon: FC<IWeightIconProps> = memo(props => {
  return <WeightSvg {...props} />;
});
