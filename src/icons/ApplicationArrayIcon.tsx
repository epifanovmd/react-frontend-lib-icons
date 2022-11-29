import React, { FC, memo } from 'react';
import ApplicationArraySvg from '../svg/application-array.svg';

export interface IApplicationArrayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationArrayIcon: FC<IApplicationArrayIconProps> = memo(props => {
  return <ApplicationArraySvg {...props} />;
});
