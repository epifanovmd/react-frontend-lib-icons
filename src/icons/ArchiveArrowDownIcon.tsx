import React, { FC, memo } from 'react';
import ArchiveArrowDownSvg from '../svg/archive-arrow-down.svg';

export interface IArchiveArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveArrowDownIcon: FC<IArchiveArrowDownIconProps> = memo(props => {
  return <ArchiveArrowDownSvg {...props} />;
});
