import React, { FC, memo } from 'react';
import ArchiveOffOutlineSvg from '../svg/archive-off-outline.svg';

export interface IArchiveOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveOffOutlineIcon: FC<IArchiveOffOutlineIconProps> = memo(props => {
  return <ArchiveOffOutlineSvg {...props} />;
});
