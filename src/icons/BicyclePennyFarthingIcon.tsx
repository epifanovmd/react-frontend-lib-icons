import React, { FC, memo } from 'react';
import BicyclePennyFarthingSvg from '../svg/bicycle-penny-farthing.svg';

export interface IBicyclePennyFarthingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BicyclePennyFarthingIcon: FC<IBicyclePennyFarthingIconProps> = memo(props => {
  return <BicyclePennyFarthingSvg {...props} />;
});
