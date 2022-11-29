import React, { FC, memo } from 'react';
import FileSvg from '../svg/file.svg';

export interface IFileIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileIcon: FC<IFileIconProps> = memo(props => {
  return <FileSvg {...props} />;
});
