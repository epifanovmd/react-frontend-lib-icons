import React, { FC, memo } from 'react';
import MarkerCheckSvg from '../svg/marker-check.svg';

export interface IMarkerCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MarkerCheckIcon: FC<IMarkerCheckIconProps> = memo(props => {
  return <MarkerCheckSvg {...props} />;
});
