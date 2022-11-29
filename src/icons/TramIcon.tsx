import React, { FC, memo } from 'react';
import TramSvg from '../svg/tram.svg';

export interface ITramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TramIcon: FC<ITramIconProps> = memo(props => {
  return <TramSvg {...props} />;
});
