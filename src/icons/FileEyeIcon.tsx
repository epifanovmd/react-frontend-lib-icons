import React, { FC, memo } from 'react';
import FileEyeSvg from '../svg/file-eye.svg';

export interface IFileEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileEyeIcon: FC<IFileEyeIconProps> = memo(props => {
  return <FileEyeSvg {...props} />;
});
