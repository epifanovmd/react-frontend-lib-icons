import React, { FC, memo } from 'react';
import ArchiveClockOutlineSvg from '../svg/archive-clock-outline.svg';

export interface IArchiveClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveClockOutlineIcon: FC<IArchiveClockOutlineIconProps> = memo(props => {
  return <ArchiveClockOutlineSvg {...props} />;
});
