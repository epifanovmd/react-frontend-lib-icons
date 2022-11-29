import React, { FC, memo } from 'react';
import ArchiveSearchOutlineSvg from '../svg/archive-search-outline.svg';

export interface IArchiveSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveSearchOutlineIcon: FC<IArchiveSearchOutlineIconProps> = memo(props => {
  return <ArchiveSearchOutlineSvg {...props} />;
});
