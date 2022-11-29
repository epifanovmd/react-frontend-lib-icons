import React, { FC, memo } from 'react';
import BikeFastSvg from '../svg/bike-fast.svg';

export interface IBikeFastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BikeFastIcon: FC<IBikeFastIconProps> = memo(props => {
  return <BikeFastSvg {...props} />;
});
