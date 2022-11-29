import React, { FC, memo } from 'react';
import RibbonSvg from '../svg/ribbon.svg';

export interface IRibbonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RibbonIcon: FC<IRibbonIconProps> = memo(props => {
  return <RibbonSvg {...props} />;
});
