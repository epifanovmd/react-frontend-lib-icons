import React, { FC, memo } from 'react';
import TennisBallSvg from '../svg/tennis-ball.svg';

export interface ITennisBallIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TennisBallIcon: FC<ITennisBallIconProps> = memo(props => {
  return <TennisBallSvg {...props} />;
});
