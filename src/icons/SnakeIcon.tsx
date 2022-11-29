import React, { FC, memo } from 'react';
import SnakeSvg from '../svg/snake.svg';

export interface ISnakeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnakeIcon: FC<ISnakeIconProps> = memo(props => {
  return <SnakeSvg {...props} />;
});
