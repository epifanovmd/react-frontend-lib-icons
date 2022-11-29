import React, { FC, memo } from 'react';
import CloudPlusSvg from '../svg/cloud-plus.svg';

export interface ICloudPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudPlusIcon: FC<ICloudPlusIconProps> = memo(props => {
  return <CloudPlusSvg {...props} />;
});
