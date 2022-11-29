import React, { FC, memo } from 'react';
import TrainCarPassengerDoorOpenSvg from '../svg/train-car-passenger-door-open.svg';

export interface ITrainCarPassengerDoorOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarPassengerDoorOpenIcon: FC<ITrainCarPassengerDoorOpenIconProps> = memo(props => {
  return <TrainCarPassengerDoorOpenSvg {...props} />;
});
