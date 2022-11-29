import React, { FC, memo } from 'react';
import ArchiveAlertSvg from '../svg/archive-alert.svg';

export interface IArchiveAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveAlertIcon: FC<IArchiveAlertIconProps> = memo(props => {
  return <ArchiveAlertSvg {...props} />;
});
