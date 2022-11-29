import React, { FC, memo } from 'react';
import ArchiveArrowUpOutlineSvg from '../svg/archive-arrow-up-outline.svg';

export interface IArchiveArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveArrowUpOutlineIcon: FC<IArchiveArrowUpOutlineIconProps> = memo(props => {
  return <ArchiveArrowUpOutlineSvg {...props} />;
});
