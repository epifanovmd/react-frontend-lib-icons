import React, { FC, memo } from 'react';
import GlassWineSvg from '../svg/glass-wine.svg';

export interface IGlassWineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassWineIcon: FC<IGlassWineIconProps> = memo(props => {
  return <GlassWineSvg {...props} />;
});
