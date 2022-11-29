import React, { FC, memo } from 'react';
import RocketSvg from '../svg/rocket.svg';

export interface IRocketIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RocketIcon: FC<IRocketIconProps> = memo(props => {
  return <RocketSvg {...props} />;
});
