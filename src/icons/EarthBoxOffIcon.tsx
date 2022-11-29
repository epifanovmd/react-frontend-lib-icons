import React, { FC, memo } from 'react';
import EarthBoxOffSvg from '../svg/earth-box-off.svg';

export interface IEarthBoxOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthBoxOffIcon: FC<IEarthBoxOffIconProps> = memo(props => {
  return <EarthBoxOffSvg {...props} />;
});
