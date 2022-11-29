import React, { FC, memo } from 'react';
import GlassesSvg from '../svg/glasses.svg';

export interface IGlassesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassesIcon: FC<IGlassesIconProps> = memo(props => {
  return <GlassesSvg {...props} />;
});
