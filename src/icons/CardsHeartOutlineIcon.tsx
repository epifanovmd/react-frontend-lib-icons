import React, { FC, memo } from 'react';
import CardsHeartOutlineSvg from '../svg/cards-heart-outline.svg';

export interface ICardsHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsHeartOutlineIcon: FC<ICardsHeartOutlineIconProps> = memo(props => {
  return <CardsHeartOutlineSvg {...props} />;
});
