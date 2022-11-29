import React, { FC, memo } from 'react';
import CardPlusOutlineSvg from '../svg/card-plus-outline.svg';

export interface ICardPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardPlusOutlineIcon: FC<ICardPlusOutlineIconProps> = memo(props => {
  return <CardPlusOutlineSvg {...props} />;
});
