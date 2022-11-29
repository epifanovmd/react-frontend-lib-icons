import React, { FC, memo } from 'react';
import FileCloudOutlineSvg from '../svg/file-cloud-outline.svg';

export interface IFileCloudOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCloudOutlineIcon: FC<IFileCloudOutlineIconProps> = memo(props => {
  return <FileCloudOutlineSvg {...props} />;
});
