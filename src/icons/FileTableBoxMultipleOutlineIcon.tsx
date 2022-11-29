import React, { FC, memo } from 'react';
import FileTableBoxMultipleOutlineSvg from '../svg/file-table-box-multiple-outline.svg';

export interface IFileTableBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileTableBoxMultipleOutlineIcon: FC<IFileTableBoxMultipleOutlineIconProps> = memo(props => {
  return <FileTableBoxMultipleOutlineSvg {...props} />;
});
