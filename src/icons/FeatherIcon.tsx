import React, { FC, memo } from 'react';
import FeatherSvg from '../svg/feather.svg';

export interface IFeatherIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FeatherIcon: FC<IFeatherIconProps> = memo(props => {
  return <FeatherSvg {...props} />;
});
