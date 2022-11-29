import React, { FC, memo } from 'react';
import ArchiveLockOutlineSvg from '../svg/archive-lock-outline.svg';

export interface IArchiveLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveLockOutlineIcon: FC<IArchiveLockOutlineIconProps> = memo(props => {
  return <ArchiveLockOutlineSvg {...props} />;
});
