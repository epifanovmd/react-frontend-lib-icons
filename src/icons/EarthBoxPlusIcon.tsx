import React, { FC, memo } from 'react';
import EarthBoxPlusSvg from '../svg/earth-box-plus.svg';

export interface IEarthBoxPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthBoxPlusIcon: FC<IEarthBoxPlusIconProps> = memo(props => {
  return <EarthBoxPlusSvg {...props} />;
});
