import React, { FC, memo } from 'react';
import FolderTableOutlineSvg from '../svg/folder-table-outline.svg';

export interface IFolderTableOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderTableOutlineIcon: FC<IFolderTableOutlineIconProps> = memo(props => {
  return <FolderTableOutlineSvg {...props} />;
});
