import React, { FC, memo } from 'react';
import StadiumSvg from '../svg/stadium.svg';

export interface IStadiumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StadiumIcon: FC<IStadiumIconProps> = memo(props => {
  return <StadiumSvg {...props} />;
});
