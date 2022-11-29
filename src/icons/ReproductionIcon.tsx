import React, { FC, memo } from 'react';
import ReproductionSvg from '../svg/reproduction.svg';

export interface IReproductionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReproductionIcon: FC<IReproductionIconProps> = memo(props => {
  return <ReproductionSvg {...props} />;
});
