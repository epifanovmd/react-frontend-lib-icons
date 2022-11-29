import React, { FC, memo } from 'react';
import FolderSearchSvg from '../svg/folder-search.svg';

export interface IFolderSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderSearchIcon: FC<IFolderSearchIconProps> = memo(props => {
  return <FolderSearchSvg {...props} />;
});
