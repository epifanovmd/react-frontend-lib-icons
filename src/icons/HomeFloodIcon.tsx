import React, { FC, memo } from 'react';
import HomeFloodSvg from '../svg/home-flood.svg';

export interface IHomeFloodIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeFloodIcon: FC<IHomeFloodIconProps> = memo(props => {
  return <HomeFloodSvg {...props} />;
});
