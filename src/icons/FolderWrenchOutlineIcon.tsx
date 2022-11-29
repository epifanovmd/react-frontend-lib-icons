import React, { FC, memo } from 'react';
import FolderWrenchOutlineSvg from '../svg/folder-wrench-outline.svg';

export interface IFolderWrenchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderWrenchOutlineIcon: FC<IFolderWrenchOutlineIconProps> = memo(props => {
  return <FolderWrenchOutlineSvg {...props} />;
});
