import React, { FC, memo } from 'react';
import LandRowsVerticalSvg from '../svg/land-rows-vertical.svg';

export interface ILandRowsVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LandRowsVerticalIcon: FC<ILandRowsVerticalIconProps> = memo(props => {
  return <LandRowsVerticalSvg {...props} />;
});
