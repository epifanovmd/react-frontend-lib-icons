import React, { FC, memo } from 'react';
import FolderArrowLeftOutlineSvg from '../svg/folder-arrow-left-outline.svg';

export interface IFolderArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowLeftOutlineIcon: FC<IFolderArrowLeftOutlineIconProps> = memo(props => {
  return <FolderArrowLeftOutlineSvg {...props} />;
});
