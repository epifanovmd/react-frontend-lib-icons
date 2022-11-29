import React, { FC, memo } from 'react';
import DownloadNetworkOutlineSvg from '../svg/download-network-outline.svg';

export interface IDownloadNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DownloadNetworkOutlineIcon: FC<IDownloadNetworkOutlineIconProps> = memo(props => {
  return <DownloadNetworkOutlineSvg {...props} />;
});
