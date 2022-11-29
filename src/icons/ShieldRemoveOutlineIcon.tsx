import React, { FC, memo } from 'react';
import ShieldRemoveOutlineSvg from '../svg/shield-remove-outline.svg';

export interface IShieldRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldRemoveOutlineIcon: FC<IShieldRemoveOutlineIconProps> = memo(props => {
  return <ShieldRemoveOutlineSvg {...props} />;
});
