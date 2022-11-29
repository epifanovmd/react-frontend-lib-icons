import React, { FC, memo } from 'react';
import FolderHomeOutlineSvg from '../svg/folder-home-outline.svg';

export interface IFolderHomeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderHomeOutlineIcon: FC<IFolderHomeOutlineIconProps> = memo(props => {
  return <FolderHomeOutlineSvg {...props} />;
});
