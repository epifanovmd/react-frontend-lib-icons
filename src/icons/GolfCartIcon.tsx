import React, { FC, memo } from 'react';
import GolfCartSvg from '../svg/golf-cart.svg';

export interface IGolfCartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GolfCartIcon: FC<IGolfCartIconProps> = memo(props => {
  return <GolfCartSvg {...props} />;
});
