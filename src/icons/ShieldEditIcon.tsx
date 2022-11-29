import React, { FC, memo } from 'react';
import ShieldEditSvg from '../svg/shield-edit.svg';

export interface IShieldEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldEditIcon: FC<IShieldEditIconProps> = memo(props => {
  return <ShieldEditSvg {...props} />;
});
