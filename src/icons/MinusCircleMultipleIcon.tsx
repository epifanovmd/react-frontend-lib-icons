import React, { FC, memo } from 'react';
import MinusCircleMultipleSvg from '../svg/minus-circle-multiple.svg';

export interface IMinusCircleMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusCircleMultipleIcon: FC<IMinusCircleMultipleIconProps> = memo(props => {
  return <MinusCircleMultipleSvg {...props} />;
});
