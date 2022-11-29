import React, { FC, memo } from 'react';
import FilePowerpointOutlineSvg from '../svg/file-powerpoint-outline.svg';

export interface IFilePowerpointOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePowerpointOutlineIcon: FC<IFilePowerpointOutlineIconProps> = memo(props => {
  return <FilePowerpointOutlineSvg {...props} />;
});
