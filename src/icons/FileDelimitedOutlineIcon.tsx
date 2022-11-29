import React, { FC, memo } from 'react';
import FileDelimitedOutlineSvg from '../svg/file-delimited-outline.svg';

export interface IFileDelimitedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDelimitedOutlineIcon: FC<IFileDelimitedOutlineIconProps> = memo(props => {
  return <FileDelimitedOutlineSvg {...props} />;
});
