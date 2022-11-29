import React, { FC, memo } from 'react';
import MinusBoxOutlineSvg from '../svg/minus-box-outline.svg';

export interface IMinusBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusBoxOutlineIcon: FC<IMinusBoxOutlineIconProps> = memo(props => {
  return <MinusBoxOutlineSvg {...props} />;
});
