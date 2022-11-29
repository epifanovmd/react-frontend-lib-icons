import React, { FC, memo } from 'react';
import TrainCarBoxOpenSvg from '../svg/train-car-box-open.svg';

export interface ITrainCarBoxOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarBoxOpenIcon: FC<ITrainCarBoxOpenIconProps> = memo(props => {
  return <TrainCarBoxOpenSvg {...props} />;
});
