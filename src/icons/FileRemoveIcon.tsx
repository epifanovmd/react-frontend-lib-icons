import React, { FC, memo } from 'react';
import FileRemoveSvg from '../svg/file-remove.svg';

export interface IFileRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileRemoveIcon: FC<IFileRemoveIconProps> = memo(props => {
  return <FileRemoveSvg {...props} />;
});
