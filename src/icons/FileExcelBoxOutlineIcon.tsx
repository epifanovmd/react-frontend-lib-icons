import React, { FC, memo } from 'react';
import FileExcelBoxOutlineSvg from '../svg/file-excel-box-outline.svg';

export interface IFileExcelBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileExcelBoxOutlineIcon: FC<IFileExcelBoxOutlineIconProps> = memo(props => {
  return <FileExcelBoxOutlineSvg {...props} />;
});
