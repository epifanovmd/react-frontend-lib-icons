import React, { FC, memo } from 'react';
import AccessPointSvg from '../svg/access-point.svg';

export interface IAccessPointIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccessPointIcon: FC<IAccessPointIconProps> = memo(props => {
  return <AccessPointSvg {...props} />;
});
