import React, { FC, memo } from 'react';
import FileTreeOutlineSvg from '../svg/file-tree-outline.svg';

export interface IFileTreeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileTreeOutlineIcon: FC<IFileTreeOutlineIconProps> = memo(props => {
  return <FileTreeOutlineSvg {...props} />;
});
