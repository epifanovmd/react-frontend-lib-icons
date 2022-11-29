import React, { FC, memo } from 'react';
import CloudUploadOutlineSvg from '../svg/cloud-upload-outline.svg';

export interface ICloudUploadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudUploadOutlineIcon: FC<ICloudUploadOutlineIconProps> = memo(props => {
  return <CloudUploadOutlineSvg {...props} />;
});
