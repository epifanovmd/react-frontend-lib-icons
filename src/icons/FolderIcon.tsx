import React, { FC, memo } from 'react';
import FolderSvg from '../svg/folder.svg';

export interface IFolderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderIcon: FC<IFolderIconProps> = memo(props => {
  return <FolderSvg {...props} />;
});
