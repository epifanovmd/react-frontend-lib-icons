import React, { FC, memo } from 'react';
import CloudCircleSvg from '../svg/cloud-circle.svg';

export interface ICloudCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudCircleIcon: FC<ICloudCircleIconProps> = memo(props => {
  return <CloudCircleSvg {...props} />;
});
