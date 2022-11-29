import React, { FC, memo } from 'react';
import CloudPrintSvg from '../svg/cloud-print.svg';

export interface ICloudPrintIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudPrintIcon: FC<ICloudPrintIconProps> = memo(props => {
  return <CloudPrintSvg {...props} />;
});
