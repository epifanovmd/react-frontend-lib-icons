import React, { FC, memo } from 'react';
import FileClockOutlineSvg from '../svg/file-clock-outline.svg';

export interface IFileClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileClockOutlineIcon: FC<IFileClockOutlineIconProps> = memo(props => {
  return <FileClockOutlineSvg {...props} />;
});
