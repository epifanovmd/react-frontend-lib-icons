import React, { FC, memo } from 'react';
import FireHydrantOffSvg from '../svg/fire-hydrant-off.svg';

export interface IFireHydrantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireHydrantOffIcon: FC<IFireHydrantOffIconProps> = memo(props => {
  return <FireHydrantOffSvg {...props} />;
});
