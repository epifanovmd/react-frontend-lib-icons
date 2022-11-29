import React, { FC, memo } from 'react';
import FilePowerpointBoxOutlineSvg from '../svg/file-powerpoint-box-outline.svg';

export interface IFilePowerpointBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePowerpointBoxOutlineIcon: FC<IFilePowerpointBoxOutlineIconProps> = memo(props => {
  return <FilePowerpointBoxOutlineSvg {...props} />;
});
