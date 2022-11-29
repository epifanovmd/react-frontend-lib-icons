import React, { FC, memo } from 'react';
import FolderOutlineSvg from '../svg/folder-outline.svg';

export interface IFolderOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderOutlineIcon: FC<IFolderOutlineIconProps> = memo(props => {
  return <FolderOutlineSvg {...props} />;
});
