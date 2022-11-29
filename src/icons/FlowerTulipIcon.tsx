import React, { FC, memo } from 'react';
import FlowerTulipSvg from '../svg/flower-tulip.svg';

export interface IFlowerTulipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlowerTulipIcon: FC<IFlowerTulipIconProps> = memo(props => {
  return <FlowerTulipSvg {...props} />;
});
