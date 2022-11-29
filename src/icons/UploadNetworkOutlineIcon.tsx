import React, { FC, memo } from 'react';
import UploadNetworkOutlineSvg from '../svg/upload-network-outline.svg';

export interface IUploadNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UploadNetworkOutlineIcon: FC<IUploadNetworkOutlineIconProps> = memo(props => {
  return <UploadNetworkOutlineSvg {...props} />;
});
