import React, { FC, memo } from 'react';
import CloudCheckSvg from '../svg/cloud-check.svg';

export interface ICloudCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudCheckIcon: FC<ICloudCheckIconProps> = memo(props => {
  return <CloudCheckSvg {...props} />;
});
