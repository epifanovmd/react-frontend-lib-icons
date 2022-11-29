import React, { FC, memo } from 'react';
import ShieldPlusOutlineSvg from '../svg/shield-plus-outline.svg';

export interface IShieldPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldPlusOutlineIcon: FC<IShieldPlusOutlineIconProps> = memo(props => {
  return <ShieldPlusOutlineSvg {...props} />;
});
