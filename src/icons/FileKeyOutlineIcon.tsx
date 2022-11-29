import React, { FC, memo } from 'react';
import FileKeyOutlineSvg from '../svg/file-key-outline.svg';

export interface IFileKeyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileKeyOutlineIcon: FC<IFileKeyOutlineIconProps> = memo(props => {
  return <FileKeyOutlineSvg {...props} />;
});
