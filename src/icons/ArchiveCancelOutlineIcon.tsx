import React, { FC, memo } from 'react';
import ArchiveCancelOutlineSvg from '../svg/archive-cancel-outline.svg';

export interface IArchiveCancelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveCancelOutlineIcon: FC<IArchiveCancelOutlineIconProps> = memo(props => {
  return <ArchiveCancelOutlineSvg {...props} />;
});
