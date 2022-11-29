import React, { FC, memo } from 'react';
import CardsDiamondOutlineSvg from '../svg/cards-diamond-outline.svg';

export interface ICardsDiamondOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsDiamondOutlineIcon: FC<ICardsDiamondOutlineIconProps> = memo(props => {
  return <CardsDiamondOutlineSvg {...props} />;
});
