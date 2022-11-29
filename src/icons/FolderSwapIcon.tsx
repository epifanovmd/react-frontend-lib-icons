import React, { FC, memo } from 'react';
import FolderSwapSvg from '../svg/folder-swap.svg';

export interface IFolderSwapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderSwapIcon: FC<IFolderSwapIconProps> = memo(props => {
  return <FolderSwapSvg {...props} />;
});
