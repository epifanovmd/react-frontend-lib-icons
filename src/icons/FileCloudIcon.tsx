import React, { FC, memo } from 'react';
import FileCloudSvg from '../svg/file-cloud.svg';

export interface IFileCloudIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCloudIcon: FC<IFileCloudIconProps> = memo(props => {
  return <FileCloudSvg {...props} />;
});
