import React, { FC, memo } from 'react';
import EarthOffSvg from '../svg/earth-off.svg';

export interface IEarthOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthOffIcon: FC<IEarthOffIconProps> = memo(props => {
  return <EarthOffSvg {...props} />;
});
