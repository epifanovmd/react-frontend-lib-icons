import React, { FC, memo } from 'react';
import TrainCarHopperFullSvg from '../svg/train-car-hopper-full.svg';

export interface ITrainCarHopperFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarHopperFullIcon: FC<ITrainCarHopperFullIconProps> = memo(props => {
  return <TrainCarHopperFullSvg {...props} />;
});
