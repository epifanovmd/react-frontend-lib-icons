import React, { FC, memo } from 'react';
import FilePngBoxSvg from '../svg/file-png-box.svg';

export interface IFilePngBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePngBoxIcon: FC<IFilePngBoxIconProps> = memo(props => {
  return <FilePngBoxSvg {...props} />;
});
