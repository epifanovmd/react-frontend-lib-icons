import React, { FC, memo } from 'react';
import TramSideSvg from '../svg/tram-side.svg';

export interface ITramSideIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TramSideIcon: FC<ITramSideIconProps> = memo(props => {
  return <TramSideSvg {...props} />;
});
