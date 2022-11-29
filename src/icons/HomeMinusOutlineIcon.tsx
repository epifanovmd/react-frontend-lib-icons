import React, { FC, memo } from 'react';
import HomeMinusOutlineSvg from '../svg/home-minus-outline.svg';

export interface IHomeMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeMinusOutlineIcon: FC<IHomeMinusOutlineIconProps> = memo(props => {
  return <HomeMinusOutlineSvg {...props} />;
});
