import React, { FC, memo } from 'react';
import TeddyBearSvg from '../svg/teddy-bear.svg';

export interface ITeddyBearIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TeddyBearIcon: FC<ITeddyBearIconProps> = memo(props => {
  return <TeddyBearSvg {...props} />;
});
