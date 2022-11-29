import React, { FC, memo } from 'react';
import TurtleSvg from '../svg/turtle.svg';

export interface ITurtleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TurtleIcon: FC<ITurtleIconProps> = memo(props => {
  return <TurtleSvg {...props} />;
});
