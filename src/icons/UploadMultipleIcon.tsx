import React, { FC, memo } from 'react';
import UploadMultipleSvg from '../svg/upload-multiple.svg';

export interface IUploadMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UploadMultipleIcon: FC<IUploadMultipleIconProps> = memo(props => {
  return <UploadMultipleSvg {...props} />;
});
