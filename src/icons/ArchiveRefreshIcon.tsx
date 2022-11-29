import React, { FC, memo } from 'react';
import ArchiveRefreshSvg from '../svg/archive-refresh.svg';

export interface IArchiveRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveRefreshIcon: FC<IArchiveRefreshIconProps> = memo(props => {
  return <ArchiveRefreshSvg {...props} />;
});
