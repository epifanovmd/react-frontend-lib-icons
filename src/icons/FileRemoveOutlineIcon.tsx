import React, { FC, memo } from 'react';
import FileRemoveOutlineSvg from '../svg/file-remove-outline.svg';

export interface IFileRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileRemoveOutlineIcon: FC<IFileRemoveOutlineIconProps> = memo(props => {
  return <FileRemoveOutlineSvg {...props} />;
});
