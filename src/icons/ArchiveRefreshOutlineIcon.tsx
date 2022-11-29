import React, { FC, memo } from 'react';
import ArchiveRefreshOutlineSvg from '../svg/archive-refresh-outline.svg';

export interface IArchiveRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveRefreshOutlineIcon: FC<IArchiveRefreshOutlineIconProps> = memo(props => {
  return <ArchiveRefreshOutlineSvg {...props} />;
});
