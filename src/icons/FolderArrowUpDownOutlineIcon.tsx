import React, { FC, memo } from 'react';
import FolderArrowUpDownOutlineSvg from '../svg/folder-arrow-up-down-outline.svg';

export interface IFolderArrowUpDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowUpDownOutlineIcon: FC<IFolderArrowUpDownOutlineIconProps> = memo(props => {
  return <FolderArrowUpDownOutlineSvg {...props} />;
});
