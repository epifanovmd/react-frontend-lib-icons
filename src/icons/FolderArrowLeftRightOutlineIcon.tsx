import React, { FC, memo } from 'react';
import FolderArrowLeftRightOutlineSvg from '../svg/folder-arrow-left-right-outline.svg';

export interface IFolderArrowLeftRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowLeftRightOutlineIcon: FC<IFolderArrowLeftRightOutlineIconProps> = memo(props => {
  return <FolderArrowLeftRightOutlineSvg {...props} />;
});
