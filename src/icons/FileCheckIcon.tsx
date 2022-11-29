import React, { FC, memo } from 'react';
import FileCheckSvg from '../svg/file-check.svg';

export interface IFileCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCheckIcon: FC<IFileCheckIconProps> = memo(props => {
  return <FileCheckSvg {...props} />;
});
