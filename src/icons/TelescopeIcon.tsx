import React, { FC, memo } from 'react';
import TelescopeSvg from '../svg/telescope.svg';

export interface ITelescopeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelescopeIcon: FC<ITelescopeIconProps> = memo(props => {
  return <TelescopeSvg {...props} />;
});
