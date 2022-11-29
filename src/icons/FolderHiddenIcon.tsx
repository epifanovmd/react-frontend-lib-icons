import React, { FC, memo } from 'react';
import FolderHiddenSvg from '../svg/folder-hidden.svg';

export interface IFolderHiddenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderHiddenIcon: FC<IFolderHiddenIconProps> = memo(props => {
  return <FolderHiddenSvg {...props} />;
});
