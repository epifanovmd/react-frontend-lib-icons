import React, { FC, memo } from 'react';
import FolderArrowUpOutlineSvg from '../svg/folder-arrow-up-outline.svg';

export interface IFolderArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowUpOutlineIcon: FC<IFolderArrowUpOutlineIconProps> = memo(props => {
  return <FolderArrowUpOutlineSvg {...props} />;
});
