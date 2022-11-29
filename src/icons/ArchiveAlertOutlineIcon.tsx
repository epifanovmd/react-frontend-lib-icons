import React, { FC, memo } from 'react';
import ArchiveAlertOutlineSvg from '../svg/archive-alert-outline.svg';

export interface IArchiveAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveAlertOutlineIcon: FC<IArchiveAlertOutlineIconProps> = memo(props => {
  return <ArchiveAlertOutlineSvg {...props} />;
});
