import React, { FC, memo } from 'react';
import FilePowerpointSvg from '../svg/file-powerpoint.svg';

export interface IFilePowerpointIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePowerpointIcon: FC<IFilePowerpointIconProps> = memo(props => {
  return <FilePowerpointSvg {...props} />;
});
