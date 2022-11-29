import React, { FC, memo } from 'react';
import FlowerOutlineSvg from '../svg/flower-outline.svg';

export interface IFlowerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlowerOutlineIcon: FC<IFlowerOutlineIconProps> = memo(props => {
  return <FlowerOutlineSvg {...props} />;
});
