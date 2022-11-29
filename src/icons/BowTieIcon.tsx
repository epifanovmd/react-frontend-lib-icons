import React, { FC, memo } from 'react';
import BowTieSvg from '../svg/bow-tie.svg';

export interface IBowTieIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BowTieIcon: FC<IBowTieIconProps> = memo(props => {
  return <BowTieSvg {...props} />;
});
