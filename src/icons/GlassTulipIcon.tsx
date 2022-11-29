import React, { FC, memo } from 'react';
import GlassTulipSvg from '../svg/glass-tulip.svg';

export interface IGlassTulipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassTulipIcon: FC<IGlassTulipIconProps> = memo(props => {
  return <GlassTulipSvg {...props} />;
});
