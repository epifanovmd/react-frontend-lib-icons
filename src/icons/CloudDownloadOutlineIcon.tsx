import React, { FC, memo } from 'react';
import CloudDownloadOutlineSvg from '../svg/cloud-download-outline.svg';

export interface ICloudDownloadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudDownloadOutlineIcon: FC<ICloudDownloadOutlineIconProps> = memo(props => {
  return <CloudDownloadOutlineSvg {...props} />;
});
