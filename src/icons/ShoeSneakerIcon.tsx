import React, { FC, memo } from 'react';
import ShoeSneakerSvg from '../svg/shoe-sneaker.svg';

export interface IShoeSneakerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoeSneakerIcon: FC<IShoeSneakerIconProps> = memo(props => {
  return <ShoeSneakerSvg {...props} />;
});
