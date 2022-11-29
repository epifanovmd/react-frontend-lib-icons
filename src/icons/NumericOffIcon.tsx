import React, { FC, memo } from 'react';
import NumericOffSvg from '../svg/numeric-off.svg';

export interface INumericOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NumericOffIcon: FC<INumericOffIconProps> = memo(props => {
  return <NumericOffSvg {...props} />;
});
