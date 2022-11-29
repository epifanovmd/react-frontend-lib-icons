import React, { FC, memo } from 'react';
import LandRowsHorizontalSvg from '../svg/land-rows-horizontal.svg';

export interface ILandRowsHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LandRowsHorizontalIcon: FC<ILandRowsHorizontalIconProps> = memo(props => {
  return <LandRowsHorizontalSvg {...props} />;
});
