import React, { FC, memo } from 'react';
import TrainCarFlatbedTankSvg from '../svg/train-car-flatbed-tank.svg';

export interface ITrainCarFlatbedTankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarFlatbedTankIcon: FC<ITrainCarFlatbedTankIconProps> = memo(props => {
  return <TrainCarFlatbedTankSvg {...props} />;
});
