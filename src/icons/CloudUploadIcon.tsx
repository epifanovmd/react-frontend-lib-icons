import React, { FC, memo } from 'react';
import CloudUploadSvg from '../svg/cloud-upload.svg';

export interface ICloudUploadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudUploadIcon: FC<ICloudUploadIconProps> = memo(props => {
  return <CloudUploadSvg {...props} />;
});
