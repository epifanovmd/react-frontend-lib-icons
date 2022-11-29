import React, { FC, memo } from 'react';
import AccessPointMinusSvg from '../svg/access-point-minus.svg';

export interface IAccessPointMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccessPointMinusIcon: FC<IAccessPointMinusIconProps> = memo(props => {
  return <AccessPointMinusSvg {...props} />;
});
