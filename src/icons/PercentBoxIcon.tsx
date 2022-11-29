import React, { FC, memo } from 'react';
import PercentBoxSvg from '../svg/percent-box.svg';

export interface IPercentBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PercentBoxIcon: FC<IPercentBoxIconProps> = memo(props => {
  return <PercentBoxSvg {...props} />;
});
