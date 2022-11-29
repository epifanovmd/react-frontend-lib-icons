import React, { FC, memo } from 'react';
import FolderArrowRightSvg from '../svg/folder-arrow-right.svg';

export interface IFolderArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderArrowRightIcon: FC<IFolderArrowRightIconProps> = memo(props => {
  return <FolderArrowRightSvg {...props} />;
});
