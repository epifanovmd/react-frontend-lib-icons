import React, { FC, memo } from 'react';
import ArchiveClockSvg from '../svg/archive-clock.svg';

export interface IArchiveClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveClockIcon: FC<IArchiveClockIconProps> = memo(props => {
  return <ArchiveClockSvg {...props} />;
});
