import React, { FC, memo } from 'react';
import RouterSvg from '../svg/router.svg';

export interface IRouterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RouterIcon: FC<IRouterIconProps> = memo(props => {
  return <RouterSvg {...props} />;
});
