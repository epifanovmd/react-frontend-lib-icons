import React, { FC, memo } from 'react';
import FileWordBoxOutlineSvg from '../svg/file-word-box-outline.svg';

export interface IFileWordBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileWordBoxOutlineIcon: FC<IFileWordBoxOutlineIconProps> = memo(props => {
  return <FileWordBoxOutlineSvg {...props} />;
});
