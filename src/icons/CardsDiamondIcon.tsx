import React, { FC, memo } from 'react';
import CardsDiamondSvg from '../svg/cards-diamond.svg';

export interface ICardsDiamondIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsDiamondIcon: FC<ICardsDiamondIconProps> = memo(props => {
  return <CardsDiamondSvg {...props} />;
});
