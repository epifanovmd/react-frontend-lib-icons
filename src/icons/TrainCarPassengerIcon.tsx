import React, { FC, memo } from 'react';
import TrainCarPassengerSvg from '../svg/train-car-passenger.svg';

export interface ITrainCarPassengerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarPassengerIcon: FC<ITrainCarPassengerIconProps> = memo(props => {
  return <TrainCarPassengerSvg {...props} />;
});
