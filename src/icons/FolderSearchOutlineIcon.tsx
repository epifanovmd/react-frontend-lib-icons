import React, { FC, memo } from 'react';
import FolderSearchOutlineSvg from '../svg/folder-search-outline.svg';

export interface IFolderSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderSearchOutlineIcon: FC<IFolderSearchOutlineIconProps> = memo(props => {
  return <FolderSearchOutlineSvg {...props} />;
});
