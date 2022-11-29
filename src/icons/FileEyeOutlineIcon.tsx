import React, { FC, memo } from 'react';
import FileEyeOutlineSvg from '../svg/file-eye-outline.svg';

export interface IFileEyeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileEyeOutlineIcon: FC<IFileEyeOutlineIconProps> = memo(props => {
  return <FileEyeOutlineSvg {...props} />;
});
