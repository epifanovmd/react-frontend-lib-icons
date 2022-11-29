import React, { FC, memo } from 'react';
import FolderHeartSvg from '../svg/folder-heart.svg';

export interface IFolderHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderHeartIcon: FC<IFolderHeartIconProps> = memo(props => {
  return <FolderHeartSvg {...props} />;
});
