import React, { FC, memo } from 'react';
import FileHiddenSvg from '../svg/file-hidden.svg';

export interface IFileHiddenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileHiddenIcon: FC<IFileHiddenIconProps> = memo(props => {
  return <FileHiddenSvg {...props} />;
});
