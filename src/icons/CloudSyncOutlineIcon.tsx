import React, { FC, memo } from 'react';
import CloudSyncOutlineSvg from '../svg/cloud-sync-outline.svg';

export interface ICloudSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudSyncOutlineIcon: FC<ICloudSyncOutlineIconProps> = memo(props => {
  return <CloudSyncOutlineSvg {...props} />;
});
