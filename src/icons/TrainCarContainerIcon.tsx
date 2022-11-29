import React, { FC, memo } from 'react';
import TrainCarContainerSvg from '../svg/train-car-container.svg';

export interface ITrainCarContainerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarContainerIcon: FC<ITrainCarContainerIconProps> = memo(props => {
  return <TrainCarContainerSvg {...props} />;
});
