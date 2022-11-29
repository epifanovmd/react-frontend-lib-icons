import React, { FC, memo } from 'react';
import PercentBoxOutlineSvg from '../svg/percent-box-outline.svg';

export interface IPercentBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PercentBoxOutlineIcon: FC<IPercentBoxOutlineIconProps> = memo(props => {
  return <PercentBoxOutlineSvg {...props} />;
});
