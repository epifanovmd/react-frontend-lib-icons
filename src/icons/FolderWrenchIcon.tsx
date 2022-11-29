import React, { FC, memo } from 'react';
import FolderWrenchSvg from '../svg/folder-wrench.svg';

export interface IFolderWrenchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderWrenchIcon: FC<IFolderWrenchIconProps> = memo(props => {
  return <FolderWrenchSvg {...props} />;
});
