import React, { FC, memo } from 'react';
import TireSvg from '../svg/tire.svg';

export interface ITireIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TireIcon: FC<ITireIconProps> = memo(props => {
  return <TireSvg {...props} />;
});
