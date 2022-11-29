import React, { FC, memo } from 'react';
import FolderMoveOutlineSvg from '../svg/folder-move-outline.svg';

export interface IFolderMoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMoveOutlineIcon: FC<IFolderMoveOutlineIconProps> = memo(props => {
  return <FolderMoveOutlineSvg {...props} />;
});
