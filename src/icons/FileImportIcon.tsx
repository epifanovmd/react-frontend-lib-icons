import React, { FC, memo } from 'react';
import FileImportSvg from '../svg/file-import.svg';

export interface IFileImportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImportIcon: FC<IFileImportIconProps> = memo(props => {
  return <FileImportSvg {...props} />;
});
