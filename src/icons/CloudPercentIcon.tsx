import React, { FC, memo } from 'react';
import CloudPercentSvg from '../svg/cloud-percent.svg';

export interface ICloudPercentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudPercentIcon: FC<ICloudPercentIconProps> = memo(props => {
  return <CloudPercentSvg {...props} />;
});
