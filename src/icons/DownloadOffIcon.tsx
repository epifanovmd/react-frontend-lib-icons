import React, { FC, memo } from 'react';
import DownloadOffSvg from '../svg/download-off.svg';

export interface IDownloadOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadOffIcon: FC<IDownloadOffIconProps> = memo(props => {
  return <DownloadOffSvg {...props} />;
});
