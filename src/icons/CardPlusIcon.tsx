import React, { FC, memo } from 'react';
import CardPlusSvg from '../svg/card-plus.svg';

export interface ICardPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardPlusIcon: FC<ICardPlusIconProps> = memo(props => {
  return <CardPlusSvg {...props} />;
});
