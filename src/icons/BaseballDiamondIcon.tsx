import React, { FC, memo } from 'react';
import BaseballDiamondSvg from '../svg/baseball-diamond.svg';

export interface IBaseballDiamondIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BaseballDiamondIcon: FC<IBaseballDiamondIconProps> = memo(props => {
  return <BaseballDiamondSvg {...props} />;
});
