import React, { FC, memo } from 'react';
import TheaterSvg from '../svg/theater.svg';

export interface ITheaterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TheaterIcon: FC<ITheaterIconProps> = memo(props => {
  return <TheaterSvg {...props} />;
});
