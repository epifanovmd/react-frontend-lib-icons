import React, { FC, memo } from 'react';
import FolderMultipleSvg from '../svg/folder-multiple.svg';

export interface IFolderMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderMultipleIcon: FC<IFolderMultipleIconProps> = memo(props => {
  return <FolderMultipleSvg {...props} />;
});
