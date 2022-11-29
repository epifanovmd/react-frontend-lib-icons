import React, { FC, memo } from 'react';
import Dice5Svg from '../svg/dice-5.svg';

export interface IDice5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice5Icon: FC<IDice5IconProps> = memo(props => {
  return <Dice5Svg {...props} />;
});
