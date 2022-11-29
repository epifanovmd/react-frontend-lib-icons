import React, { FC, memo } from 'react';
import CloudSvg from '../svg/cloud.svg';

export interface ICloudIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudIcon: FC<ICloudIconProps> = memo(props => {
  return <CloudSvg {...props} />;
});
