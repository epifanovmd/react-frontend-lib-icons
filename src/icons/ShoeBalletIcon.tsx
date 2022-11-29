import React, { FC, memo } from 'react';
import ShoeBalletSvg from '../svg/shoe-ballet.svg';

export interface IShoeBalletIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoeBalletIcon: FC<IShoeBalletIconProps> = memo(props => {
  return <ShoeBalletSvg {...props} />;
});
