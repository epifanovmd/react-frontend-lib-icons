import React, { FC, memo } from 'react';
import ArchiveLockOpenSvg from '../svg/archive-lock-open.svg';

export interface IArchiveLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveLockOpenIcon: FC<IArchiveLockOpenIconProps> = memo(props => {
  return <ArchiveLockOpenSvg {...props} />;
});
