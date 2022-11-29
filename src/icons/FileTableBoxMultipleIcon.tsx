import React, { FC, memo } from 'react';
import FileTableBoxMultipleSvg from '../svg/file-table-box-multiple.svg';

export interface IFileTableBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileTableBoxMultipleIcon: FC<IFileTableBoxMultipleIconProps> = memo(props => {
  return <FileTableBoxMultipleSvg {...props} />;
});
