import React, { FC, memo } from 'react';
import FileVideoOutlineSvg from '../svg/file-video-outline.svg';

export interface IFileVideoOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileVideoOutlineIcon: FC<IFileVideoOutlineIconProps> = memo(props => {
  return <FileVideoOutlineSvg {...props} />;
});
