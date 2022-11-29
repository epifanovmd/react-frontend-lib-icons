import React, { FC, memo } from 'react';
import FlowerPollenOutlineSvg from '../svg/flower-pollen-outline.svg';

export interface IFlowerPollenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlowerPollenOutlineIcon: FC<IFlowerPollenOutlineIconProps> = memo(props => {
  return <FlowerPollenOutlineSvg {...props} />;
});
