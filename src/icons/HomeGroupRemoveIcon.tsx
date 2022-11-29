import React, { FC, memo } from 'react';
import HomeGroupRemoveSvg from '../svg/home-group-remove.svg';

export interface IHomeGroupRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeGroupRemoveIcon: FC<IHomeGroupRemoveIconProps> = memo(props => {
  return <HomeGroupRemoveSvg {...props} />;
});
