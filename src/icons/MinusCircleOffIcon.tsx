import React, { FC, memo } from 'react';
import MinusCircleOffSvg from '../svg/minus-circle-off.svg';

export interface IMinusCircleOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusCircleOffIcon: FC<IMinusCircleOffIconProps> = memo(props => {
  return <MinusCircleOffSvg {...props} />;
});
