import React, { FC, memo } from 'react';
import ArchiveArrowUpSvg from '../svg/archive-arrow-up.svg';

export interface IArchiveArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveArrowUpIcon: FC<IArchiveArrowUpIconProps> = memo(props => {
  return <ArchiveArrowUpSvg {...props} />;
});
