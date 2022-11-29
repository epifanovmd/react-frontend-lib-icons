import React, { FC, memo } from 'react';
import MinusCircleOffOutlineSvg from '../svg/minus-circle-off-outline.svg';

export interface IMinusCircleOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusCircleOffOutlineIcon: FC<IMinusCircleOffOutlineIconProps> = memo(props => {
  return <MinusCircleOffOutlineSvg {...props} />;
});
