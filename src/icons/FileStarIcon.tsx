import React, { FC, memo } from 'react';
import FileStarSvg from '../svg/file-star.svg';

export interface IFileStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileStarIcon: FC<IFileStarIconProps> = memo(props => {
  return <FileStarSvg {...props} />;
});
