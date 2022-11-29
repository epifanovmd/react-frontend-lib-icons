import React, { FC, memo } from 'react';
import ShieldEditOutlineSvg from '../svg/shield-edit-outline.svg';

export interface IShieldEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldEditOutlineIcon: FC<IShieldEditOutlineIconProps> = memo(props => {
  return <ShieldEditOutlineSvg {...props} />;
});
