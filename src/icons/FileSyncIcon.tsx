import React, { FC, memo } from 'react';
import FileSyncSvg from '../svg/file-sync.svg';

export interface IFileSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSyncIcon: FC<IFileSyncIconProps> = memo(props => {
  return <FileSyncSvg {...props} />;
});
