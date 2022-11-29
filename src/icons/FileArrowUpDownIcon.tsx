import React, { FC, memo } from 'react';
import FileArrowUpDownSvg from '../svg/file-arrow-up-down.svg';

export interface IFileArrowUpDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileArrowUpDownIcon: FC<IFileArrowUpDownIconProps> = memo(props => {
  return <FileArrowUpDownSvg {...props} />;
});
