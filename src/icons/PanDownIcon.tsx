import React, { FC, memo } from 'react';
import PanDownSvg from '../svg/pan-down.svg';

export interface IPanDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanDownIcon: FC<IPanDownIconProps> = memo(props => {
  return <PanDownSvg {...props} />;
});
