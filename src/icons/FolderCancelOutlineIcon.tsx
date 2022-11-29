import React, { FC, memo } from 'react';
import FolderCancelOutlineSvg from '../svg/folder-cancel-outline.svg';

export interface IFolderCancelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderCancelOutlineIcon: FC<IFolderCancelOutlineIconProps> = memo(props => {
  return <FolderCancelOutlineSvg {...props} />;
});
