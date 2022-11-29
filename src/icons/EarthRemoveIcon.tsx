import React, { FC, memo } from 'react';
import EarthRemoveSvg from '../svg/earth-remove.svg';

export interface IEarthRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthRemoveIcon: FC<IEarthRemoveIconProps> = memo(props => {
  return <EarthRemoveSvg {...props} />;
});
