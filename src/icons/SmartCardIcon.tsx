import React, { FC, memo } from 'react';
import SmartCardSvg from '../svg/smart-card.svg';

export interface ISmartCardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmartCardIcon: FC<ISmartCardIconProps> = memo(props => {
  return <SmartCardSvg {...props} />;
});
