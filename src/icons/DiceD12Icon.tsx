import React, { FC, memo } from 'react';
import DiceD12Svg from '../svg/dice-d12.svg';

export interface IDiceD12IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiceD12Icon: FC<IDiceD12IconProps> = memo(props => {
  return <DiceD12Svg {...props} />;
});
