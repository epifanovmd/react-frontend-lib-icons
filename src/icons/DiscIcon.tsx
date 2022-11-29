import React, { FC, memo } from 'react';
import DiscSvg from '../svg/disc.svg';

export interface IDiscIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiscIcon: FC<IDiscIconProps> = memo(props => {
  return <DiscSvg {...props} />;
});
