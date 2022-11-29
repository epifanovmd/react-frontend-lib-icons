import React, { FC, memo } from 'react';
import ScrewLagSvg from '../svg/screw-lag.svg';

export interface IScrewLagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScrewLagIcon: FC<IScrewLagIconProps> = memo(props => {
  return <ScrewLagSvg {...props} />;
});
