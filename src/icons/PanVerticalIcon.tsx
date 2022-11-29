import React, { FC, memo } from 'react';
import PanVerticalSvg from '../svg/pan-vertical.svg';

export interface IPanVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanVerticalIcon: FC<IPanVerticalIconProps> = memo(props => {
  return <PanVerticalSvg {...props} />;
});
