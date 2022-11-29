import React, { FC, memo } from 'react';
import DiamondSvg from '../svg/diamond.svg';

export interface IDiamondIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiamondIcon: FC<IDiamondIconProps> = memo(props => {
  return <DiamondSvg {...props} />;
});
