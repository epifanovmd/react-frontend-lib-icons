import React, { FC, memo } from 'react';
import MinusThickSvg from '../svg/minus-thick.svg';

export interface IMinusThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusThickIcon: FC<IMinusThickIconProps> = memo(props => {
  return <MinusThickSvg {...props} />;
});
