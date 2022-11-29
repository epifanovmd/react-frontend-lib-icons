import React, { FC, memo } from 'react';
import DownloadOutlineSvg from '../svg/download-outline.svg';

export interface IDownloadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadOutlineIcon: FC<IDownloadOutlineIconProps> = memo(props => {
  return <DownloadOutlineSvg {...props} />;
});
