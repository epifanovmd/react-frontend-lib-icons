import React, { FC, memo } from 'react';
import TrainCarCabooseSvg from '../svg/train-car-caboose.svg';

export interface ITrainCarCabooseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarCabooseIcon: FC<ITrainCarCabooseIconProps> = memo(props => {
  return <TrainCarCabooseSvg {...props} />;
});
