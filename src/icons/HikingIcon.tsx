import React, { FC, memo } from 'react';
import HikingSvg from '../svg/hiking.svg';

export interface IHikingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HikingIcon: FC<IHikingIconProps> = memo(props => {
  return <HikingSvg {...props} />;
});
