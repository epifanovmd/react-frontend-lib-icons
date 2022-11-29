import React, { FC, memo } from 'react';
import MinusCircleSvg from '../svg/minus-circle.svg';

export interface IMinusCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusCircleIcon: FC<IMinusCircleIconProps> = memo(props => {
  return <MinusCircleSvg {...props} />;
});
