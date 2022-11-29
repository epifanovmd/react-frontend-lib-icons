import React, { FC, memo } from 'react';
import ShieldSearchSvg from '../svg/shield-search.svg';

export interface IShieldSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldSearchIcon: FC<IShieldSearchIconProps> = memo(props => {
  return <ShieldSearchSvg {...props} />;
});
