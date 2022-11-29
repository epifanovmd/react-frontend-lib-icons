import React, { FC, memo } from 'react';
import FileStarOutlineSvg from '../svg/file-star-outline.svg';

export interface IFileStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileStarOutlineIcon: FC<IFileStarOutlineIconProps> = memo(props => {
  return <FileStarOutlineSvg {...props} />;
});
