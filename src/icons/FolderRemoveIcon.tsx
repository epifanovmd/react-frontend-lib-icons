import React, { FC, memo } from 'react';
import FolderRemoveSvg from '../svg/folder-remove.svg';

export interface IFolderRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderRemoveIcon: FC<IFolderRemoveIconProps> = memo(props => {
  return <FolderRemoveSvg {...props} />;
});
