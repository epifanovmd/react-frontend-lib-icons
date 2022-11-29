import React, { FC, memo } from 'react';
import DatabaseMarkerSvg from '../svg/database-marker.svg';

export interface IDatabaseMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseMarkerIcon: FC<IDatabaseMarkerIconProps> = memo(props => {
  return <DatabaseMarkerSvg {...props} />;
});
