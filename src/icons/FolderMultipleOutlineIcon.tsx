import React, { FC, memo } from 'react';
import FolderMultipleOutlineSvg from '../svg/folder-multiple-outline.svg';

export interface IFolderMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMultipleOutlineIcon: FC<IFolderMultipleOutlineIconProps> = memo(props => {
  return <FolderMultipleOutlineSvg {...props} />;
});
