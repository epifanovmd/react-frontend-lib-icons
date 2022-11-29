import React, { FC, memo } from 'react';
import FlowerTulipOutlineSvg from '../svg/flower-tulip-outline.svg';

export interface IFlowerTulipOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlowerTulipOutlineIcon: FC<IFlowerTulipOutlineIconProps> = memo(props => {
  return <FlowerTulipOutlineSvg {...props} />;
});
