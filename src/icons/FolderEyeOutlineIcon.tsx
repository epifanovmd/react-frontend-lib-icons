import React, { FC, memo } from 'react';
import FolderEyeOutlineSvg from '../svg/folder-eye-outline.svg';

export interface IFolderEyeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderEyeOutlineIcon: FC<IFolderEyeOutlineIconProps> = memo(props => {
  return <FolderEyeOutlineSvg {...props} />;
});
