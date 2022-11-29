import React, { FC, memo } from 'react';
import CardMinusSvg from '../svg/card-minus.svg';

export interface ICardMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardMinusIcon: FC<ICardMinusIconProps> = memo(props => {
  return <CardMinusSvg {...props} />;
});
