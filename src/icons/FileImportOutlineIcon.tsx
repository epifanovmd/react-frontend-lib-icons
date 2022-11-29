import React, { FC, memo } from 'react';
import FileImportOutlineSvg from '../svg/file-import-outline.svg';

export interface IFileImportOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileImportOutlineIcon: FC<IFileImportOutlineIconProps> = memo(props => {
  return <FileImportOutlineSvg {...props} />;
});
