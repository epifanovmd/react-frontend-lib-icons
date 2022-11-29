import React, { FC, memo } from 'react';
import TrainCarFlatbedSvg from '../svg/train-car-flatbed.svg';

export interface ITrainCarFlatbedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarFlatbedIcon: FC<ITrainCarFlatbedIconProps> = memo(props => {
  return <TrainCarFlatbedSvg {...props} />;
});
