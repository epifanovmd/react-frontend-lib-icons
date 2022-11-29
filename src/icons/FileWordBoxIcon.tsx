import React, { FC, memo } from 'react';
import FileWordBoxSvg from '../svg/file-word-box.svg';

export interface IFileWordBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileWordBoxIcon: FC<IFileWordBoxIconProps> = memo(props => {
  return <FileWordBoxSvg {...props} />;
});
