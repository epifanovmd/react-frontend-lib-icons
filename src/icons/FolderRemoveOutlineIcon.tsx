import React, { FC, memo } from 'react';
import FolderRemoveOutlineSvg from '../svg/folder-remove-outline.svg';

export interface IFolderRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderRemoveOutlineIcon: FC<IFolderRemoveOutlineIconProps> = memo(props => {
  return <FolderRemoveOutlineSvg {...props} />;
});
