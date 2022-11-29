import React, { FC, memo } from 'react';
import ProgressUploadSvg from '../svg/progress-upload.svg';

export interface IProgressUploadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressUploadIcon: FC<IProgressUploadIconProps> = memo(props => {
  return <ProgressUploadSvg {...props} />;
});
