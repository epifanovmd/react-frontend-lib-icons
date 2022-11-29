import React, { FC, memo } from 'react';
import VolumeMediumSvg from '../svg/volume-medium.svg';

export interface IVolumeMediumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolumeMediumIcon: FC<IVolumeMediumIconProps> = memo(props => {
  return <VolumeMediumSvg {...props} />;
});
