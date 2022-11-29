import React, { FC, memo } from 'react';
import FolderPlusOutlineSvg from '../svg/folder-plus-outline.svg';

export interface IFolderPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderPlusOutlineIcon: FC<IFolderPlusOutlineIconProps> = memo(props => {
  return <FolderPlusOutlineSvg {...props} />;
});
