import React, { FC, memo } from 'react';
import FileSwapOutlineSvg from '../svg/file-swap-outline.svg';

export interface IFileSwapOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSwapOutlineIcon: FC<IFileSwapOutlineIconProps> = memo(props => {
  return <FileSwapOutlineSvg {...props} />;
});
