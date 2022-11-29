import React, { FC, memo } from 'react';
import FolderStarSvg from '../svg/folder-star.svg';

export interface IFolderStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderStarIcon: FC<IFolderStarIconProps> = memo(props => {
  return <FolderStarSvg {...props} />;
});
