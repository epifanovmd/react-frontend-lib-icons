import React, { FC, memo } from 'react';
import FileWordOutlineSvg from '../svg/file-word-outline.svg';

export interface IFileWordOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileWordOutlineIcon: FC<IFileWordOutlineIconProps> = memo(props => {
  return <FileWordOutlineSvg {...props} />;
});
