import React, { FC, memo } from 'react';
import SmartCardOffOutlineSvg from '../svg/smart-card-off-outline.svg';

export interface ISmartCardOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmartCardOffOutlineIcon: FC<ISmartCardOffOutlineIconProps> = memo(props => {
  return <SmartCardOffOutlineSvg {...props} />;
});
