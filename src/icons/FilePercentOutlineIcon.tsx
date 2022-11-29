import React, { FC, memo } from 'react';
import FilePercentOutlineSvg from '../svg/file-percent-outline.svg';

export interface IFilePercentOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePercentOutlineIcon: FC<IFilePercentOutlineIconProps> = memo(props => {
  return <FilePercentOutlineSvg {...props} />;
});
