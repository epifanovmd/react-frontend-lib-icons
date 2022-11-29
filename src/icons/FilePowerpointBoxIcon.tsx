import React, { FC, memo } from 'react';
import FilePowerpointBoxSvg from '../svg/file-powerpoint-box.svg';

export interface IFilePowerpointBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePowerpointBoxIcon: FC<IFilePowerpointBoxIconProps> = memo(props => {
  return <FilePowerpointBoxSvg {...props} />;
});
