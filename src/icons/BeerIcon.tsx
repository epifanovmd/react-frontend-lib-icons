import React, { FC, memo } from 'react';
import BeerSvg from '../svg/beer.svg';

export interface IBeerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeerIcon: FC<IBeerIconProps> = memo(props => {
  return <BeerSvg {...props} />;
});
