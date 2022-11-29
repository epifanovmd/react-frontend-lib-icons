import React, { FC, memo } from 'react';
import AccessPointRemoveSvg from '../svg/access-point-remove.svg';

export interface IAccessPointRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccessPointRemoveIcon: FC<IAccessPointRemoveIconProps> = memo(props => {
  return <AccessPointRemoveSvg {...props} />;
});
