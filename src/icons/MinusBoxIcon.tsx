import React, { FC, memo } from 'react';
import MinusBoxSvg from '../svg/minus-box.svg';

export interface IMinusBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusBoxIcon: FC<IMinusBoxIconProps> = memo(props => {
  return <MinusBoxSvg {...props} />;
});
