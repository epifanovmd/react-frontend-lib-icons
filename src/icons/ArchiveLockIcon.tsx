import React, { FC, memo } from 'react';
import ArchiveLockSvg from '../svg/archive-lock.svg';

export interface IArchiveLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveLockIcon: FC<IArchiveLockIconProps> = memo(props => {
  return <ArchiveLockSvg {...props} />;
});
