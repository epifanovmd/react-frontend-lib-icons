import React, { FC, memo } from 'react';
import FileSyncOutlineSvg from '../svg/file-sync-outline.svg';

export interface IFileSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSyncOutlineIcon: FC<IFileSyncOutlineIconProps> = memo(props => {
  return <FileSyncOutlineSvg {...props} />;
});
