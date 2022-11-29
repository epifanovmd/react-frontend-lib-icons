import React, { FC, memo } from 'react';
import FolderStarMultipleOutlineSvg from '../svg/folder-star-multiple-outline.svg';

export interface IFolderStarMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderStarMultipleOutlineIcon: FC<IFolderStarMultipleOutlineIconProps> = memo(props => {
  return <FolderStarMultipleOutlineSvg {...props} />;
});
