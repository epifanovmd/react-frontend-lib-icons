import React, { FC, memo } from 'react';
import MinusCircleMultipleOutlineSvg from '../svg/minus-circle-multiple-outline.svg';

export interface IMinusCircleMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusCircleMultipleOutlineIcon: FC<IMinusCircleMultipleOutlineIconProps> = memo(props => {
  return <MinusCircleMultipleOutlineSvg {...props} />;
});
