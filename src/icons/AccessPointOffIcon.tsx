import React, { FC, memo } from 'react';
import AccessPointOffSvg from '../svg/access-point-off.svg';

export interface IAccessPointOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccessPointOffIcon: FC<IAccessPointOffIconProps> = memo(props => {
  return <AccessPointOffSvg {...props} />;
});
