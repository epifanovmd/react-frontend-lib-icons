import React, { FC, memo } from 'react';
import FolderArrowDownSvg from '../svg/folder-arrow-down.svg';

export interface IFolderArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowDownIcon: FC<IFolderArrowDownIconProps> = memo(props => {
  return <FolderArrowDownSvg {...props} />;
});
