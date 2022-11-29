import React, { FC, memo } from 'react';
import ArchiveMarkerOutlineSvg from '../svg/archive-marker-outline.svg';

export interface IArchiveMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveMarkerOutlineIcon: FC<IArchiveMarkerOutlineIconProps> = memo(props => {
  return <ArchiveMarkerOutlineSvg {...props} />;
});
