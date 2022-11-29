import React, { FC, memo } from 'react';
import FolderArrowLeftRightSvg from '../svg/folder-arrow-left-right.svg';

export interface IFolderArrowLeftRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowLeftRightIcon: FC<IFolderArrowLeftRightIconProps> = memo(props => {
  return <FolderArrowLeftRightSvg {...props} />;
});
