import React, { FC, memo } from 'react';
import CloudDownloadSvg from '../svg/cloud-download.svg';

export interface ICloudDownloadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudDownloadIcon: FC<ICloudDownloadIconProps> = memo(props => {
  return <CloudDownloadSvg {...props} />;
});
