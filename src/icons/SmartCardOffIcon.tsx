import React, { FC, memo } from 'react';
import SmartCardOffSvg from '../svg/smart-card-off.svg';

export interface ISmartCardOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmartCardOffIcon: FC<ISmartCardOffIconProps> = memo(props => {
  return <SmartCardOffSvg {...props} />;
});
