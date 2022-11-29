import React, { FC, memo } from 'react';
import FileMultipleOutlineSvg from '../svg/file-multiple-outline.svg';

export interface IFileMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileMultipleOutlineIcon: FC<IFileMultipleOutlineIconProps> = memo(props => {
  return <FileMultipleOutlineSvg {...props} />;
});
