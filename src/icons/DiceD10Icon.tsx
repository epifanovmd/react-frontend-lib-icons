import React, { FC, memo } from 'react';
import DiceD10Svg from '../svg/dice-d10.svg';

export interface IDiceD10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD10Icon: FC<IDiceD10IconProps> = memo(props => {
  return <DiceD10Svg {...props} />;
});
