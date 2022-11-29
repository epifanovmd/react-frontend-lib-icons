import React, { FC, memo } from 'react';
import NetflixSvg from '../svg/netflix.svg';

export interface INetflixIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NetflixIcon: FC<INetflixIconProps> = memo(props => {
  return <NetflixSvg {...props} />;
});
