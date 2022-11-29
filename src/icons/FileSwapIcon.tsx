import React, { FC, memo } from 'react';
import FileSwapSvg from '../svg/file-swap.svg';

export interface IFileSwapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSwapIcon: FC<IFileSwapIconProps> = memo(props => {
  return <FileSwapSvg {...props} />;
});
