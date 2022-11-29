import React, { FC, memo } from 'react';
import FileSignSvg from '../svg/file-sign.svg';

export interface IFileSignIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSignIcon: FC<IFileSignIconProps> = memo(props => {
  return <FileSignSvg {...props} />;
});
