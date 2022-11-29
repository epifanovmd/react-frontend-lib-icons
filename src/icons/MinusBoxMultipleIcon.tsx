import React, { FC, memo } from 'react';
import MinusBoxMultipleSvg from '../svg/minus-box-multiple.svg';

export interface IMinusBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinusBoxMultipleIcon: FC<IMinusBoxMultipleIconProps> = memo(props => {
  return <MinusBoxMultipleSvg {...props} />;
});
