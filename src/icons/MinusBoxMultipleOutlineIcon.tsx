import React, { FC, memo } from 'react';
import MinusBoxMultipleOutlineSvg from '../svg/minus-box-multiple-outline.svg';

export interface IMinusBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusBoxMultipleOutlineIcon: FC<IMinusBoxMultipleOutlineIconProps> = memo(props => {
  return <MinusBoxMultipleOutlineSvg {...props} />;
});
