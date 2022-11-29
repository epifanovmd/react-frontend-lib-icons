import React, { FC, memo } from 'react';
import DiamondStoneSvg from '../svg/diamond-stone.svg';

export interface IDiamondStoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiamondStoneIcon: FC<IDiamondStoneIconProps> = memo(props => {
  return <DiamondStoneSvg {...props} />;
});
