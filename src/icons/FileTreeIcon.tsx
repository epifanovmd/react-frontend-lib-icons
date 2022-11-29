import React, { FC, memo } from 'react';
import FileTreeSvg from '../svg/file-tree.svg';

export interface IFileTreeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileTreeIcon: FC<IFileTreeIconProps> = memo(props => {
  return <FileTreeSvg {...props} />;
});
