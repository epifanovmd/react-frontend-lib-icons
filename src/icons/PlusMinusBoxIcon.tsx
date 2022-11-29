import React, { FC, memo } from 'react';
import PlusMinusBoxSvg from '../svg/plus-minus-box.svg';

export interface IPlusMinusBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusMinusBoxIcon: FC<IPlusMinusBoxIconProps> = memo(props => {
  return <PlusMinusBoxSvg {...props} />;
});
