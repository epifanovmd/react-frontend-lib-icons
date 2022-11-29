import React, { FC, memo } from 'react';
import PailOffSvg from '../svg/pail-off.svg';

export interface IPailOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PailOffIcon: FC<IPailOffIconProps> = memo(props => {
  return <PailOffSvg {...props} />;
});
