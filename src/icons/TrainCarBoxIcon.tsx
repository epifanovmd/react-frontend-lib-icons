import React, { FC, memo } from 'react';
import TrainCarBoxSvg from '../svg/train-car-box.svg';

export interface ITrainCarBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarBoxIcon: FC<ITrainCarBoxIconProps> = memo(props => {
  return <TrainCarBoxSvg {...props} />;
});
