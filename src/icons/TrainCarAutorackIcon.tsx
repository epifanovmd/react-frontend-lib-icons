import React, { FC, memo } from 'react';
import TrainCarAutorackSvg from '../svg/train-car-autorack.svg';

export interface ITrainCarAutorackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarAutorackIcon: FC<ITrainCarAutorackIconProps> = memo(props => {
  return <TrainCarAutorackSvg {...props} />;
});
