import React, { FC, memo } from 'react';
import DownloadCircleSvg from '../svg/download-circle.svg';

export interface IDownloadCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadCircleIcon: FC<IDownloadCircleIconProps> = memo(props => {
  return <DownloadCircleSvg {...props} />;
});
