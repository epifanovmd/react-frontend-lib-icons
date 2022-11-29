import React, { FC, memo } from 'react';
import FlowerPoppySvg from '../svg/flower-poppy.svg';

export interface IFlowerPoppyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlowerPoppyIcon: FC<IFlowerPoppyIconProps> = memo(props => {
  return <FlowerPoppySvg {...props} />;
});
