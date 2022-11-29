import React, { FC, memo } from 'react';
import FolderStarOutlineSvg from '../svg/folder-star-outline.svg';

export interface IFolderStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderStarOutlineIcon: FC<IFolderStarOutlineIconProps> = memo(props => {
  return <FolderStarOutlineSvg {...props} />;
});
