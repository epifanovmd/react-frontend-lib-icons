import React, { FC, memo } from 'react';
import FileCheckOutlineSvg from '../svg/file-check-outline.svg';

export interface IFileCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCheckOutlineIcon: FC<IFileCheckOutlineIconProps> = memo(props => {
  return <FileCheckOutlineSvg {...props} />;
});
