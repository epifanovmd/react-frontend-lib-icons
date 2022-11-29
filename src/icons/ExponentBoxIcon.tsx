import React, { FC, memo } from 'react';
import ExponentBoxSvg from '../svg/exponent-box.svg';

export interface IExponentBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExponentBoxIcon: FC<IExponentBoxIconProps> = memo(props => {
  return <ExponentBoxSvg {...props} />;
});
