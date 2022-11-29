import React, { FC, memo } from 'react';
import DownloadBoxSvg from '../svg/download-box.svg';

export interface IDownloadBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadBoxIcon: FC<IDownloadBoxIconProps> = memo(props => {
  return <DownloadBoxSvg {...props} />;
});
