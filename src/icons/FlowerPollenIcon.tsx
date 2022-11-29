import React, { FC, memo } from 'react';
import FlowerPollenSvg from '../svg/flower-pollen.svg';

export interface IFlowerPollenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlowerPollenIcon: FC<IFlowerPollenIconProps> = memo(props => {
  return <FlowerPollenSvg {...props} />;
});
