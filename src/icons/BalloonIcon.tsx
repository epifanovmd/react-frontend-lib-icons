import React, { FC, memo } from 'react';
import BalloonSvg from '../svg/balloon.svg';

export interface IBalloonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BalloonIcon: FC<IBalloonIconProps> = memo(props => {
  return <BalloonSvg {...props} />;
});
