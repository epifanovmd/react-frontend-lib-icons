import React, { FC, memo } from 'react';
import ArchiveOffSvg from '../svg/archive-off.svg';

export interface IArchiveOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveOffIcon: FC<IArchiveOffIconProps> = memo(props => {
  return <ArchiveOffSvg {...props} />;
});
