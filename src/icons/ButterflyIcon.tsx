import React, { FC, memo } from 'react';
import ButterflySvg from '../svg/butterfly.svg';

export interface IButterflyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ButterflyIcon: FC<IButterflyIconProps> = memo(props => {
  return <ButterflySvg {...props} />;
});
