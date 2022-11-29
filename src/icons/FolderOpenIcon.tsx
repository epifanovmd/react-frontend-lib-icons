import React, { FC, memo } from 'react';
import FolderOpenSvg from '../svg/folder-open.svg';

export interface IFolderOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderOpenIcon: FC<IFolderOpenIconProps> = memo(props => {
  return <FolderOpenSvg {...props} />;
});
