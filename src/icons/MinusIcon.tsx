import React, { FC, memo } from 'react';
import MinusSvg from '../svg/minus.svg';

export interface IMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusIcon: FC<IMinusIconProps> = memo(props => {
  return <MinusSvg {...props} />;
});
