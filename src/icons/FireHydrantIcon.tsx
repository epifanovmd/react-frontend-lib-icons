import React, { FC, memo } from 'react';
import FireHydrantSvg from '../svg/fire-hydrant.svg';

export interface IFireHydrantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireHydrantIcon: FC<IFireHydrantIconProps> = memo(props => {
  return <FireHydrantSvg {...props} />;
});
