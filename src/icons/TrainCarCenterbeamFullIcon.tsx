import React, { FC, memo } from 'react';
import TrainCarCenterbeamFullSvg from '../svg/train-car-centerbeam-full.svg';

export interface ITrainCarCenterbeamFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarCenterbeamFullIcon: FC<ITrainCarCenterbeamFullIconProps> = memo(props => {
  return <TrainCarCenterbeamFullSvg {...props} />;
});
