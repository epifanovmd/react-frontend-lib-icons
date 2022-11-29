import React, { FC, memo } from 'react';
import TrainCarFlatbedCarSvg from '../svg/train-car-flatbed-car.svg';

export interface ITrainCarFlatbedCarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarFlatbedCarIcon: FC<ITrainCarFlatbedCarIconProps> = memo(props => {
  return <TrainCarFlatbedCarSvg {...props} />;
});
