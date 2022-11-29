import React, { FC, memo } from 'react';
import BeerOutlineSvg from '../svg/beer-outline.svg';

export interface IBeerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeerOutlineIcon: FC<IBeerOutlineIconProps> = memo(props => {
  return <BeerOutlineSvg {...props} />;
});
