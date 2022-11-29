import React, { FC, memo } from 'react';
import Dice4Svg from '../svg/dice-4.svg';

export interface IDice4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice4Icon: FC<IDice4IconProps> = memo(props => {
  return <Dice4Svg {...props} />;
});
