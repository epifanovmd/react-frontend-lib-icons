import React, { FC, memo } from 'react';
import BootstrapSvg from '../svg/bootstrap.svg';

export interface IBootstrapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BootstrapIcon: FC<IBootstrapIconProps> = memo(props => {
  return <BootstrapSvg {...props} />;
});
