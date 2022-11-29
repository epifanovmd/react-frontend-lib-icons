import React, { FC, memo } from 'react';
import FolderTableSvg from '../svg/folder-table.svg';

export interface IFolderTableIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderTableIcon: FC<IFolderTableIconProps> = memo(props => {
  return <FolderTableSvg {...props} />;
});
