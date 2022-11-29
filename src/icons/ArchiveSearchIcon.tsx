import React, { FC, memo } from 'react';
import ArchiveSearchSvg from '../svg/archive-search.svg';

export interface IArchiveSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveSearchIcon: FC<IArchiveSearchIconProps> = memo(props => {
  return <ArchiveSearchSvg {...props} />;
});
