import React, { FC, memo } from 'react';
import TrainCarCenterbeamSvg from '../svg/train-car-centerbeam.svg';

export interface ITrainCarCenterbeamIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarCenterbeamIcon: FC<ITrainCarCenterbeamIconProps> = memo(props => {
  return <TrainCarCenterbeamSvg {...props} />;
});
