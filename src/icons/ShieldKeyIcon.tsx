import React, { FC, memo } from 'react';
import ShieldKeySvg from '../svg/shield-key.svg';

export interface IShieldKeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldKeyIcon: FC<IShieldKeyIconProps> = memo(props => {
  return <ShieldKeySvg {...props} />;
});
