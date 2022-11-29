import React, { FC, memo } from 'react';
import SofaSingleSvg from '../svg/sofa-single.svg';

export interface ISofaSingleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SofaSingleIcon: FC<ISofaSingleIconProps> = memo(props => {
  return <SofaSingleSvg {...props} />;
});
