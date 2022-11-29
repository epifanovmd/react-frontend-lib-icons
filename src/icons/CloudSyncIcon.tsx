import React, { FC, memo } from 'react';
import CloudSyncSvg from '../svg/cloud-sync.svg';

export interface ICloudSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudSyncIcon: FC<ICloudSyncIconProps> = memo(props => {
  return <CloudSyncSvg {...props} />;
});
