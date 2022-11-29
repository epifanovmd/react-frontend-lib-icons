import React, { FC, memo } from 'react';
import ArchiveStarSvg from '../svg/archive-star.svg';

export interface IArchiveStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveStarIcon: FC<IArchiveStarIconProps> = memo(props => {
  return <ArchiveStarSvg {...props} />;
});
