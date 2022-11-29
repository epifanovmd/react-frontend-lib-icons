import React, { FC, memo } from 'react';
import TrainCarTankSvg from '../svg/train-car-tank.svg';

export interface ITrainCarTankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarTankIcon: FC<ITrainCarTankIconProps> = memo(props => {
  return <TrainCarTankSvg {...props} />;
});
