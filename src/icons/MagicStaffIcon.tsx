import React, { FC, memo } from 'react';
import MagicStaffSvg from '../svg/magic-staff.svg';

export interface IMagicStaffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagicStaffIcon: FC<IMagicStaffIconProps> = memo(props => {
  return <MagicStaffSvg {...props} />;
});
