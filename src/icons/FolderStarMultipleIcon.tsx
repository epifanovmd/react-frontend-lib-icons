import React, { FC, memo } from 'react';
import FolderStarMultipleSvg from '../svg/folder-star-multiple.svg';

export interface IFolderStarMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderStarMultipleIcon: FC<IFolderStarMultipleIconProps> = memo(props => {
  return <FolderStarMultipleSvg {...props} />;
});
