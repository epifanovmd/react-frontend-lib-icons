import React, { FC, memo } from 'react';
import HomeSiloOutlineSvg from '../svg/home-silo-outline.svg';

export interface IHomeSiloOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeSiloOutlineIcon: FC<IHomeSiloOutlineIconProps> = memo(props => {
  return <HomeSiloOutlineSvg {...props} />;
});
