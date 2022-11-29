import React, { FC, memo } from 'react';
import FileOutlineSvg from '../svg/file-outline.svg';

export interface IFileOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileOutlineIcon: FC<IFileOutlineIconProps> = memo(props => {
  return <FileOutlineSvg {...props} />;
});
