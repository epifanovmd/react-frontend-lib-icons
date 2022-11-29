import React, { FC, memo } from 'react';
import FolderArrowLeftSvg from '../svg/folder-arrow-left.svg';

export interface IFolderArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowLeftIcon: FC<IFolderArrowLeftIconProps> = memo(props => {
  return <FolderArrowLeftSvg {...props} />;
});
