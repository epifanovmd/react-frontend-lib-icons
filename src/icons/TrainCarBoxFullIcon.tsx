import React, { FC, memo } from 'react';
import TrainCarBoxFullSvg from '../svg/train-car-box-full.svg';

export interface ITrainCarBoxFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarBoxFullIcon: FC<ITrainCarBoxFullIconProps> = memo(props => {
  return <TrainCarBoxFullSvg {...props} />;
});
