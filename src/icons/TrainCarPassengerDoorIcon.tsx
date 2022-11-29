import React, { FC, memo } from 'react';
import TrainCarPassengerDoorSvg from '../svg/train-car-passenger-door.svg';

export interface ITrainCarPassengerDoorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarPassengerDoorIcon: FC<ITrainCarPassengerDoorIconProps> = memo(props => {
  return <TrainCarPassengerDoorSvg {...props} />;
});
