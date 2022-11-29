import React, { FC, memo } from 'react';
import TrainCarIntermodalSvg from '../svg/train-car-intermodal.svg';

export interface ITrainCarIntermodalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarIntermodalIcon: FC<ITrainCarIntermodalIconProps> = memo(props => {
  return <TrainCarIntermodalSvg {...props} />;
});
