import React, { FC, memo } from 'react';
import FileRotateLeftSvg from '../svg/file-rotate-left.svg';

export interface IFileRotateLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileRotateLeftIcon: FC<IFileRotateLeftIconProps> = memo(props => {
  return <FileRotateLeftSvg {...props} />;
});
