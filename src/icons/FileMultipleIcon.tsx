import React, { FC, memo } from 'react';
import FileMultipleSvg from '../svg/file-multiple.svg';

export interface IFileMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileMultipleIcon: FC<IFileMultipleIconProps> = memo(props => {
  return <FileMultipleSvg {...props} />;
});
