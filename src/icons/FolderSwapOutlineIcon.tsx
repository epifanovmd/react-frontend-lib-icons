import React, { FC, memo } from 'react';
import FolderSwapOutlineSvg from '../svg/folder-swap-outline.svg';

export interface IFolderSwapOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderSwapOutlineIcon: FC<IFolderSwapOutlineIconProps> = memo(props => {
  return <FolderSwapOutlineSvg {...props} />;
});
