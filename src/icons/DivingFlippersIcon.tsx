import React, { FC, memo } from 'react';
import DivingFlippersSvg from '../svg/diving-flippers.svg';

export interface IDivingFlippersIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivingFlippersIcon: FC<IDivingFlippersIconProps> = memo(props => {
  return <DivingFlippersSvg {...props} />;
});
