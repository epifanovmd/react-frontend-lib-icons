import React, { FC, memo } from 'react';
import GlassFluteSvg from '../svg/glass-flute.svg';

export interface IGlassFluteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassFluteIcon: FC<IGlassFluteIconProps> = memo(props => {
  return <GlassFluteSvg {...props} />;
});
