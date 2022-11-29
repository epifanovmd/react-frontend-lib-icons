import React, { FC, memo } from 'react';
import ScentOffSvg from '../svg/scent-off.svg';

export interface IScentOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScentOffIcon: FC<IScentOffIconProps> = memo(props => {
  return <ScentOffSvg {...props} />;
});
