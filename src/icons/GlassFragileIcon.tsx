import React, { FC, memo } from 'react';
import GlassFragileSvg from '../svg/glass-fragile.svg';

export interface IGlassFragileIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassFragileIcon: FC<IGlassFragileIconProps> = memo(props => {
  return <GlassFragileSvg {...props} />;
});
