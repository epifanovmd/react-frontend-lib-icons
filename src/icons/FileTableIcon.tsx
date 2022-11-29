import React, { FC, memo } from 'react';
import FileTableSvg from '../svg/file-table.svg';

export interface IFileTableIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileTableIcon: FC<IFileTableIconProps> = memo(props => {
  return <FileTableSvg {...props} />;
});
