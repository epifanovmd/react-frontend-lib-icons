import React, { FC, memo } from 'react';
import TrainCarSvg from '../svg/train-car.svg';

export interface ITrainCarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarIcon: FC<ITrainCarIconProps> = memo(props => {
  return <TrainCarSvg {...props} />;
});
