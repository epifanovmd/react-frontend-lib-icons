import React, { FC, memo } from 'react';
import FolderMoveSvg from '../svg/folder-move.svg';

export interface IFolderMoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMoveIcon: FC<IFolderMoveIconProps> = memo(props => {
  return <FolderMoveSvg {...props} />;
});
