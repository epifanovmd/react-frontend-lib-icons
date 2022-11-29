import React, { FC, memo } from 'react';
import TrainCarGondolaSvg from '../svg/train-car-gondola.svg';

export interface ITrainCarGondolaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarGondolaIcon: FC<ITrainCarGondolaIconProps> = memo(props => {
  return <TrainCarGondolaSvg {...props} />;
});
