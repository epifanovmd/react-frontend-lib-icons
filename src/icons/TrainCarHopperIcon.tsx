import React, { FC, memo } from 'react';
import TrainCarHopperSvg from '../svg/train-car-hopper.svg';

export interface ITrainCarHopperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarHopperIcon: FC<ITrainCarHopperIconProps> = memo(props => {
  return <TrainCarHopperSvg {...props} />;
});
