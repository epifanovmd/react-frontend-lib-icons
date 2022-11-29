import React, { FC, memo } from 'react';
import CardSearchOutlineSvg from '../svg/card-search-outline.svg';

export interface ICardSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardSearchOutlineIcon: FC<ICardSearchOutlineIconProps> = memo(props => {
  return <CardSearchOutlineSvg {...props} />;
});
