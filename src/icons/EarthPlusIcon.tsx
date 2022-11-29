import React, { FC, memo } from 'react';
import EarthPlusSvg from '../svg/earth-plus.svg';

export interface IEarthPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthPlusIcon: FC<IEarthPlusIconProps> = memo(props => {
  return <EarthPlusSvg {...props} />;
});
