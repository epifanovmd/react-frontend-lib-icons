import React, { FC, memo } from 'react';
import ArchiveMarkerSvg from '../svg/archive-marker.svg';

export interface IArchiveMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveMarkerIcon: FC<IArchiveMarkerIconProps> = memo(props => {
  return <ArchiveMarkerSvg {...props} />;
});
