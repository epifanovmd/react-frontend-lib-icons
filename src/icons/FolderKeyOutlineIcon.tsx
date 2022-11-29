import React, { FC, memo } from 'react';
import FolderKeyOutlineSvg from '../svg/folder-key-outline.svg';

export interface IFolderKeyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderKeyOutlineIcon: FC<IFolderKeyOutlineIconProps> = memo(props => {
  return <FolderKeyOutlineSvg {...props} />;
});
