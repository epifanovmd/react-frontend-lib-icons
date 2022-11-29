import React, { FC, memo } from 'react';
import TrainVariantSvg from '../svg/train-variant.svg';

export interface ITrainVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainVariantIcon: FC<ITrainVariantIconProps> = memo(props => {
  return <TrainVariantSvg {...props} />;
});
