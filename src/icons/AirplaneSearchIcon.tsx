import React, { FC, memo } from 'react';
import AirplaneSearchSvg from '../svg/airplane-search.svg';

export interface IAirplaneSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneSearchIcon: FC<IAirplaneSearchIconProps> = memo(props => {
  return <AirplaneSearchSvg {...props} />;
});
