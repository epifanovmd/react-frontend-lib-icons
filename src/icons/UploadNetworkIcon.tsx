import React, { FC, memo } from 'react';
import UploadNetworkSvg from '../svg/upload-network.svg';

export interface IUploadNetworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UploadNetworkIcon: FC<IUploadNetworkIconProps> = memo(props => {
  return <UploadNetworkSvg {...props} />;
});
