import React, { FC, memo } from 'react';
import FileVideoSvg from '../svg/file-video.svg';

export interface IFileVideoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileVideoIcon: FC<IFileVideoIconProps> = memo(props => {
  return <FileVideoSvg {...props} />;
});
