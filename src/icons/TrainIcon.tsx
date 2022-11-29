import React, { FC, memo } from 'react';
import TrainSvg from '../svg/train.svg';

export interface ITrainIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainIcon: FC<ITrainIconProps> = memo(props => {
  return <TrainSvg {...props} />;
});
