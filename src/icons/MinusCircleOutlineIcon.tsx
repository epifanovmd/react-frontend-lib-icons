import React, { FC, memo } from 'react';
import MinusCircleOutlineSvg from '../svg/minus-circle-outline.svg';

export interface IMinusCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusCircleOutlineIcon: FC<IMinusCircleOutlineIconProps> = memo(props => {
  return <MinusCircleOutlineSvg {...props} />;
});
