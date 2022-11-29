import React, { FC, memo } from 'react';
import FileRotateRightSvg from '../svg/file-rotate-right.svg';

export interface IFileRotateRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileRotateRightIcon: FC<IFileRotateRightIconProps> = memo(props => {
  return <FileRotateRightSvg {...props} />;
});
