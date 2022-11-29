import React, { FC, memo } from 'react';
import ShoeCleatSvg from '../svg/shoe-cleat.svg';

export interface IShoeCleatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoeCleatIcon: FC<IShoeCleatIconProps> = memo(props => {
  return <ShoeCleatSvg {...props} />;
});
