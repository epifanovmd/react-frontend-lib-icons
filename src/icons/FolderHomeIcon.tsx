import React, { FC, memo } from 'react';
import FolderHomeSvg from '../svg/folder-home.svg';

export interface IFolderHomeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderHomeIcon: FC<IFolderHomeIconProps> = memo(props => {
  return <FolderHomeSvg {...props} />;
});
