import React, { FC, memo } from 'react';
import ArchiveCancelSvg from '../svg/archive-cancel.svg';

export interface IArchiveCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveCancelIcon: FC<IArchiveCancelIconProps> = memo(props => {
  return <ArchiveCancelSvg {...props} />;
});
