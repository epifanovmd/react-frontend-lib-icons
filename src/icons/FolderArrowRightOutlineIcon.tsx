import React, { FC, memo } from 'react';
import FolderArrowRightOutlineSvg from '../svg/folder-arrow-right-outline.svg';

export interface IFolderArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowRightOutlineIcon: FC<IFolderArrowRightOutlineIconProps> = memo(props => {
  return <FolderArrowRightOutlineSvg {...props} />;
});
