import React, { FC, memo } from 'react';
import FileWordSvg from '../svg/file-word.svg';

export interface IFileWordIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileWordIcon: FC<IFileWordIconProps> = memo(props => {
  return <FileWordSvg {...props} />;
});
