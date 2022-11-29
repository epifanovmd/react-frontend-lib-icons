import React, { FC, memo } from 'react';
import DownloadNetworkSvg from '../svg/download-network.svg';

export interface IDownloadNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadNetworkIcon: FC<IDownloadNetworkIconProps> = memo(props => {
  return <DownloadNetworkSvg {...props} />;
});
