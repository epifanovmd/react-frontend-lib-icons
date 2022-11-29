import React, { FC, memo } from 'react';
import FileAccountSvg from '../svg/file-account.svg';

export interface IFileAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileAccountIcon: FC<IFileAccountIconProps> = memo(props => {
  return <FileAccountSvg {...props} />;
});
