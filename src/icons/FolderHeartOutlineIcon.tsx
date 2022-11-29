import React, { FC, memo } from 'react';
import FolderHeartOutlineSvg from '../svg/folder-heart-outline.svg';

export interface IFolderHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderHeartOutlineIcon: FC<IFolderHeartOutlineIconProps> = memo(props => {
  return <FolderHeartOutlineSvg {...props} />;
});
