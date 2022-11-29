import React, { FC, memo } from 'react';
import DownloadOffOutlineSvg from '../svg/download-off-outline.svg';

export interface IDownloadOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadOffOutlineIcon: FC<IDownloadOffOutlineIconProps> = memo(props => {
  return <DownloadOffOutlineSvg {...props} />;
});
