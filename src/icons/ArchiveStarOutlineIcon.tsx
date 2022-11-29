import React, { FC, memo } from 'react';
import ArchiveStarOutlineSvg from '../svg/archive-star-outline.svg';

export interface IArchiveStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveStarOutlineIcon: FC<IArchiveStarOutlineIconProps> = memo(props => {
  return <ArchiveStarOutlineSvg {...props} />;
});
