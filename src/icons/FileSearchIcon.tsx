import React, { FC, memo } from 'react';
import FileSearchSvg from '../svg/file-search.svg';

export interface IFileSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSearchIcon: FC<IFileSearchIconProps> = memo(props => {
  return <FileSearchSvg {...props} />;
});
