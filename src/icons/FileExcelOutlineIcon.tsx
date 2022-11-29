import React, { FC, memo } from 'react';
import FileExcelOutlineSvg from '../svg/file-excel-outline.svg';

export interface IFileExcelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileExcelOutlineIcon: FC<IFileExcelOutlineIconProps> = memo(props => {
  return <FileExcelOutlineSvg {...props} />;
});
