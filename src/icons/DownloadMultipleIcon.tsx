import React, { FC, memo } from 'react';
import DownloadMultipleSvg from '../svg/download-multiple.svg';

export interface IDownloadMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadMultipleIcon: FC<IDownloadMultipleIconProps> = memo(props => {
  return <DownloadMultipleSvg {...props} />;
});
