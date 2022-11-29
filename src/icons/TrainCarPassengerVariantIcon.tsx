import React, { FC, memo } from 'react';
import TrainCarPassengerVariantSvg from '../svg/train-car-passenger-variant.svg';

export interface ITrainCarPassengerVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarPassengerVariantIcon: FC<ITrainCarPassengerVariantIconProps> = memo(props => {
  return <TrainCarPassengerVariantSvg {...props} />;
});
