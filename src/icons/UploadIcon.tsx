import React, { FC, memo } from 'react';
import UploadSvg from '../svg/upload.svg';

export interface IUploadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UploadIcon: FC<IUploadIconProps> = memo(props => {
  return <UploadSvg {...props} />;
});
