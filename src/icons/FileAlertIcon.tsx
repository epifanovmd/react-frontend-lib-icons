import React, { FC, memo } from 'react';
import FileAlertSvg from '../svg/file-alert.svg';

export interface IFileAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileAlertIcon: FC<IFileAlertIconProps> = memo(props => {
  return <FileAlertSvg {...props} />;
});
