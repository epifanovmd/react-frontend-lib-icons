import React, { FC, memo } from 'react';
import FileTableBoxOutlineSvg from '../svg/file-table-box-outline.svg';

export interface IFileTableBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileTableBoxOutlineIcon: FC<IFileTableBoxOutlineIconProps> = memo(props => {
  return <FileTableBoxOutlineSvg {...props} />;
});
