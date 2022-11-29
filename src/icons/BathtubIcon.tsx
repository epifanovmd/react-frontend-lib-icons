import React, { FC, memo } from 'react';
import BathtubSvg from '../svg/bathtub.svg';

export interface IBathtubIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BathtubIcon: FC<IBathtubIconProps> = memo(props => {
  return <BathtubSvg {...props} />;
});
