import React, { FC, memo } from 'react';
import HomeSiloSvg from '../svg/home-silo.svg';

export interface IHomeSiloIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeSiloIcon: FC<IHomeSiloIconProps> = memo(props => {
  return <HomeSiloSvg {...props} />;
});
