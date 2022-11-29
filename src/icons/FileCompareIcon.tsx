import React, { FC, memo } from 'react';
import FileCompareSvg from '../svg/file-compare.svg';

export interface IFileCompareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCompareIcon: FC<IFileCompareIconProps> = memo(props => {
  return <FileCompareSvg {...props} />;
});
