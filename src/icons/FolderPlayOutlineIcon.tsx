import React, { FC, memo } from 'react';
import FolderPlayOutlineSvg from '../svg/folder-play-outline.svg';

export interface IFolderPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderPlayOutlineIcon: FC<IFolderPlayOutlineIconProps> = memo(props => {
  return <FolderPlayOutlineSvg {...props} />;
});
