import React, { FC, memo } from 'react';
import AccessPointPlusSvg from '../svg/access-point-plus.svg';

export interface IAccessPointPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccessPointPlusIcon: FC<IAccessPointPlusIconProps> = memo(props => {
  return <AccessPointPlusSvg {...props} />;
});
