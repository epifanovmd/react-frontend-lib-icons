import React, { FC, memo } from 'react';
import FileRefreshSvg from '../svg/file-refresh.svg';

export interface IFileRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileRefreshIcon: FC<IFileRefreshIconProps> = memo(props => {
  return <FileRefreshSvg {...props} />;
});
