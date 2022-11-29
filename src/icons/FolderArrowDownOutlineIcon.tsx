import React, { FC, memo } from 'react';
import FolderArrowDownOutlineSvg from '../svg/folder-arrow-down-outline.svg';

export interface IFolderArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowDownOutlineIcon: FC<IFolderArrowDownOutlineIconProps> = memo(props => {
  return <FolderArrowDownOutlineSvg {...props} />;
});
