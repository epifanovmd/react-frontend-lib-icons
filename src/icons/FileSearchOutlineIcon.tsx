import React, { FC, memo } from 'react';
import FileSearchOutlineSvg from '../svg/file-search-outline.svg';

export interface IFileSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSearchOutlineIcon: FC<IFileSearchOutlineIconProps> = memo(props => {
  return <FileSearchOutlineSvg {...props} />;
});
