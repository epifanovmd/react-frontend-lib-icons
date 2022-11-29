import React, { FC, memo } from 'react';
import ArchiveLockOpenOutlineSvg from '../svg/archive-lock-open-outline.svg';

export interface IArchiveLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveLockOpenOutlineIcon: FC<IArchiveLockOpenOutlineIconProps> = memo(props => {
  return <ArchiveLockOpenOutlineSvg {...props} />;
});
