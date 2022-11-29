import React, { FC, memo } from 'react';
import FileCodeSvg from '../svg/file-code.svg';

export interface IFileCodeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCodeIcon: FC<IFileCodeIconProps> = memo(props => {
  return <FileCodeSvg {...props} />;
});
