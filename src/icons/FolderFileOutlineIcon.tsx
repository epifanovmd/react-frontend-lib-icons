import React, { FC, memo } from 'react';
import FolderFileOutlineSvg from '../svg/folder-file-outline.svg';

export interface IFolderFileOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderFileOutlineIcon: FC<IFolderFileOutlineIconProps> = memo(props => {
  return <FolderFileOutlineSvg {...props} />;
});
