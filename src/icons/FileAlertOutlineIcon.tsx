import React, { FC, memo } from 'react';
import FileAlertOutlineSvg from '../svg/file-alert-outline.svg';

export interface IFileAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileAlertOutlineIcon: FC<IFileAlertOutlineIconProps> = memo(props => {
  return <FileAlertOutlineSvg {...props} />;
});
