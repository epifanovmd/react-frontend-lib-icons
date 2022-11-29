import React, { FC, memo } from 'react';
import ElevationDeclineSvg from '../svg/elevation-decline.svg';

export interface IElevationDeclineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElevationDeclineIcon: FC<IElevationDeclineIconProps> = memo(props => {
  return <ElevationDeclineSvg {...props} />;
});
