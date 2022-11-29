import React, { FC, memo } from 'react';
import PailSvg from '../svg/pail.svg';

export interface IPailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PailIcon: FC<IPailIconProps> = memo(props => {
  return <PailSvg {...props} />;
});
