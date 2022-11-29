import React, { FC, memo } from 'react';
import HomePlusSvg from '../svg/home-plus.svg';

export interface IHomePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomePlusIcon: FC<IHomePlusIconProps> = memo(props => {
  return <HomePlusSvg {...props} />;
});
