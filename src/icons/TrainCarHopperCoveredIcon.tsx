import React, { FC, memo } from 'react';
import TrainCarHopperCoveredSvg from '../svg/train-car-hopper-covered.svg';

export interface ITrainCarHopperCoveredIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarHopperCoveredIcon: FC<ITrainCarHopperCoveredIconProps> = memo(props => {
  return <TrainCarHopperCoveredSvg {...props} />;
});
