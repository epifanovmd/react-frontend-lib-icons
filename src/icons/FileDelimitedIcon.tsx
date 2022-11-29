import React, { FC, memo } from 'react';
import FileDelimitedSvg from '../svg/file-delimited.svg';

export interface IFileDelimitedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDelimitedIcon: FC<IFileDelimitedIconProps> = memo(props => {
  return <FileDelimitedSvg {...props} />;
});
