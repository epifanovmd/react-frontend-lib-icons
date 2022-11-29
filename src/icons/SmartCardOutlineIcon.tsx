import React, { FC, memo } from 'react';
import SmartCardOutlineSvg from '../svg/smart-card-outline.svg';

export interface ISmartCardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmartCardOutlineIcon: FC<ISmartCardOutlineIconProps> = memo(props => {
  return <SmartCardOutlineSvg {...props} />;
});
