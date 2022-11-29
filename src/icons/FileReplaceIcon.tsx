import React, { FC, memo } from 'react';
import FileReplaceSvg from '../svg/file-replace.svg';

export interface IFileReplaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileReplaceIcon: FC<IFileReplaceIconProps> = memo(props => {
  return <FileReplaceSvg {...props} />;
});
