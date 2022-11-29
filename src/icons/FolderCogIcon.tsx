import React, { FC, memo } from 'react';
import FolderCogSvg from '../svg/folder-cog.svg';

export interface IFolderCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderCogIcon: FC<IFolderCogIconProps> = memo(props => {
  return <FolderCogSvg {...props} />;
});
