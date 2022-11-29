import React, { FC, memo } from 'react';
import FolderAccountOutlineSvg from '../svg/folder-account-outline.svg';

export interface IFolderAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderAccountOutlineIcon: FC<IFolderAccountOutlineIconProps> = memo(props => {
  return <FolderAccountOutlineSvg {...props} />;
});
