import React, { FC, memo } from 'react';
import ShieldPlusSvg from '../svg/shield-plus.svg';

export interface IShieldPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldPlusIcon: FC<IShieldPlusIconProps> = memo(props => {
  return <ShieldPlusSvg {...props} />;
});
