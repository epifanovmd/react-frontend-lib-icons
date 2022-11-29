import React, { FC, memo } from 'react';
import FolderArrowUpSvg from '../svg/folder-arrow-up.svg';

export interface IFolderArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowUpIcon: FC<IFolderArrowUpIconProps> = memo(props => {
  return <FolderArrowUpSvg {...props} />;
});
