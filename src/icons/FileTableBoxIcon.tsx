import React, { FC, memo } from 'react';
import FileTableBoxSvg from '../svg/file-table-box.svg';

export interface IFileTableBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileTableBoxIcon: FC<IFileTableBoxIconProps> = memo(props => {
  return <FileTableBoxSvg {...props} />;
});
