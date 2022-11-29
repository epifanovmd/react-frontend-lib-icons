import React, { FC, memo } from 'react';
import ToyBrickSvg from '../svg/toy-brick.svg';

export interface IToyBrickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickIcon: FC<IToyBrickIconProps> = memo(props => {
  return <ToyBrickSvg {...props} />;
});
