import React, { FC, memo } from 'react';
import FlowerSvg from '../svg/flower.svg';

export interface IFlowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlowerIcon: FC<IFlowerIconProps> = memo(props => {
  return <FlowerSvg {...props} />;
});
