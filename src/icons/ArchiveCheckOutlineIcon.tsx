import React, { FC, memo } from 'react';
import ArchiveCheckOutlineSvg from '../svg/archive-check-outline.svg';

export interface IArchiveCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveCheckOutlineIcon: FC<IArchiveCheckOutlineIconProps> = memo(props => {
  return <ArchiveCheckOutlineSvg {...props} />;
});
