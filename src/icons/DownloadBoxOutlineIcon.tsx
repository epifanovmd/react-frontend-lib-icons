import React, { FC, memo } from 'react';
import DownloadBoxOutlineSvg from '../svg/download-box-outline.svg';

export interface IDownloadBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadBoxOutlineIcon: FC<IDownloadBoxOutlineIconProps> = memo(props => {
  return <DownloadBoxOutlineSvg {...props} />;
});
