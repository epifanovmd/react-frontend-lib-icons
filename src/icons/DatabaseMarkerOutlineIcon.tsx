import React, { FC, memo } from 'react';
import DatabaseMarkerOutlineSvg from '../svg/database-marker-outline.svg';

export interface IDatabaseMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseMarkerOutlineIcon: FC<IDatabaseMarkerOutlineIconProps> = memo(props => {
  return <DatabaseMarkerOutlineSvg {...props} />;
});
