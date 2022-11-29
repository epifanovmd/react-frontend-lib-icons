import React, { FC, memo } from 'react';
import GoKartSvg from '../svg/go-kart.svg';

export interface IGoKartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoKartIcon: FC<IGoKartIconProps> = memo(props => {
  return <GoKartSvg {...props} />;
});
