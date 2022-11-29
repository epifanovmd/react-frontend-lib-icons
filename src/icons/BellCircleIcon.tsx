import React, { FC, memo } from 'react';
import BellCircleSvg from '../svg/bell-circle.svg';

export interface IBellCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellCircleIcon: FC<IBellCircleIconProps> = memo(props => {
  return <BellCircleSvg {...props} />;
});
