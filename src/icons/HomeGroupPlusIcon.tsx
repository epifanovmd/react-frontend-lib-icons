import React, { FC, memo } from 'react';
import HomeGroupPlusSvg from '../svg/home-group-plus.svg';

export interface IHomeGroupPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeGroupPlusIcon: FC<IHomeGroupPlusIconProps> = memo(props => {
  return <HomeGroupPlusSvg {...props} />;
});
