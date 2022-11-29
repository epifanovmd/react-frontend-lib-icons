import React, { FC, memo } from 'react';
import FolderArrowUpDownSvg from '../svg/folder-arrow-up-down.svg';

export interface IFolderArrowUpDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowUpDownIcon: FC<IFolderArrowUpDownIconProps> = memo(props => {
  return <FolderArrowUpDownSvg {...props} />;
});
