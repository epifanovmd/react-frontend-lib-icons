import React, { FC, memo } from 'react';
import GlassMugOffSvg from '../svg/glass-mug-off.svg';

export interface IGlassMugOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassMugOffIcon: FC<IGlassMugOffIconProps> = memo(props => {
  return <GlassMugOffSvg {...props} />;
});
