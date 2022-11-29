import React, { FC, memo } from 'react';
import FolderMultiplePlusOutlineSvg from '../svg/folder-multiple-plus-outline.svg';

export interface IFolderMultiplePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMultiplePlusOutlineIcon: FC<IFolderMultiplePlusOutlineIconProps> = memo(props => {
  return <FolderMultiplePlusOutlineSvg {...props} />;
});
