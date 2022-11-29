import React, { FC, memo } from 'react';
import CloudRefreshSvg from '../svg/cloud-refresh.svg';

export interface ICloudRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudRefreshIcon: FC<ICloudRefreshIconProps> = memo(props => {
  return <CloudRefreshSvg {...props} />;
});
