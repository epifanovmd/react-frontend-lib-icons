import React, { FC, memo } from 'react';
import DownloadCircleOutlineSvg from '../svg/download-circle-outline.svg';

export interface IDownloadCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadCircleOutlineIcon: FC<IDownloadCircleOutlineIconProps> = memo(props => {
  return <DownloadCircleOutlineSvg {...props} />;
});
