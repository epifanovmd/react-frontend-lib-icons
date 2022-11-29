import React, { FC, memo } from 'react';
import DownloadSvg from '../svg/download.svg';

export interface IDownloadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadIcon: FC<IDownloadIconProps> = memo(props => {
  return <DownloadSvg {...props} />;
});
