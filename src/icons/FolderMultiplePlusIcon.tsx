import React, { FC, memo } from 'react';
import FolderMultiplePlusSvg from '../svg/folder-multiple-plus.svg';

export interface IFolderMultiplePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMultiplePlusIcon: FC<IFolderMultiplePlusIconProps> = memo(props => {
  return <FolderMultiplePlusSvg {...props} />;
});
