import React, { FC, memo } from 'react';
import AccessPointCheckSvg from '../svg/access-point-check.svg';

export interface IAccessPointCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccessPointCheckIcon: FC<IAccessPointCheckIconProps> = memo(props => {
  return <AccessPointCheckSvg {...props} />;
});
