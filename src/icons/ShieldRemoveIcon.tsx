import React, { FC, memo } from 'react';
import ShieldRemoveSvg from '../svg/shield-remove.svg';

export interface IShieldRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldRemoveIcon: FC<IShieldRemoveIconProps> = memo(props => {
  return <ShieldRemoveSvg {...props} />;
});
