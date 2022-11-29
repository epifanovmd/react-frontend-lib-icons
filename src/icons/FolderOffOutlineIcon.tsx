import React, { FC, memo } from 'react';
import FolderOffOutlineSvg from '../svg/folder-off-outline.svg';

export interface IFolderOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderOffOutlineIcon: FC<IFolderOffOutlineIconProps> = memo(props => {
  return <FolderOffOutlineSvg {...props} />;
});
