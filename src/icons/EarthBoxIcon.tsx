import React, { FC, memo } from 'react';
import EarthBoxSvg from '../svg/earth-box.svg';

export interface IEarthBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthBoxIcon: FC<IEarthBoxIconProps> = memo(props => {
  return <EarthBoxSvg {...props} />;
});
