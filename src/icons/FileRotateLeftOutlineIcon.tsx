import React, { FC, memo } from 'react';
import FileRotateLeftOutlineSvg from '../svg/file-rotate-left-outline.svg';

export interface IFileRotateLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileRotateLeftOutlineIcon: FC<IFileRotateLeftOutlineIconProps> = memo(props => {
  return <FileRotateLeftOutlineSvg {...props} />;
});
