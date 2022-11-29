import React, { FC, memo } from 'react';
import FileTableOutlineSvg from '../svg/file-table-outline.svg';

export interface IFileTableOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileTableOutlineIcon: FC<IFileTableOutlineIconProps> = memo(props => {
  return <FileTableOutlineSvg {...props} />;
});
