import React, { FC, memo } from 'react';
import PinterestSvg from '../svg/pinterest.svg';

export interface IPinterestIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PinterestIcon: FC<IPinterestIconProps> = memo(props => {
  return <PinterestSvg {...props} />;
});
