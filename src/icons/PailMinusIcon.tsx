import React, { FC, memo } from 'react';
import PailMinusSvg from '../svg/pail-minus.svg';

export interface IPailMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PailMinusIcon: FC<IPailMinusIconProps> = memo(props => {
  return <PailMinusSvg {...props} />;
});
