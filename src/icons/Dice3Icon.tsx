import React, { FC, memo } from 'react';
import Dice3Svg from '../svg/dice-3.svg';

export interface IDice3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Dice3Icon: FC<IDice3IconProps> = memo(props => {
  return <Dice3Svg {...props} />;
});
