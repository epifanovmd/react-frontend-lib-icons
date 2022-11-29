import React, { FC, memo } from 'react';
import FileArrowUpDownOutlineSvg from '../svg/file-arrow-up-down-outline.svg';

export interface IFileArrowUpDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileArrowUpDownOutlineIcon: FC<IFileArrowUpDownOutlineIconProps> = memo(props => {
  return <FileArrowUpDownOutlineSvg {...props} />;
});
