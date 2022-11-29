import React, { FC, memo } from 'react';
import FilePercentSvg from '../svg/file-percent.svg';

export interface IFilePercentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePercentIcon: FC<IFilePercentIconProps> = memo(props => {
  return <FilePercentSvg {...props} />;
});
