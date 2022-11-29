import React, { FC, memo } from 'react';
import CardSearchSvg from '../svg/card-search.svg';

export interface ICardSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardSearchIcon: FC<ICardSearchIconProps> = memo(props => {
  return <CardSearchSvg {...props} />;
});
