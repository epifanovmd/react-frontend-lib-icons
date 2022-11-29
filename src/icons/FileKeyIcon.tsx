import React, { FC, memo } from 'react';
import FileKeySvg from '../svg/file-key.svg';

export interface IFileKeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileKeyIcon: FC<IFileKeyIconProps> = memo(props => {
  return <FileKeySvg {...props} />;
});
