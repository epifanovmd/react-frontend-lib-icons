import React, { FC, memo } from 'react';
import FileClockSvg from '../svg/file-clock.svg';

export interface IFileClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileClockIcon: FC<IFileClockIconProps> = memo(props => {
  return <FileClockSvg {...props} />;
});
