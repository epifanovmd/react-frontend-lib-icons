import React, { FC, memo } from 'react';
import FolderPlusSvg from '../svg/folder-plus.svg';

export interface IFolderPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderPlusIcon: FC<IFolderPlusIconProps> = memo(props => {
  return <FolderPlusSvg {...props} />;
});
