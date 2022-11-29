import React, { FC, memo } from 'react';
import GlassStangeSvg from '../svg/glass-stange.svg';

export interface IGlassStangeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassStangeIcon: FC<IGlassStangeIconProps> = memo(props => {
  return <GlassStangeSvg {...props} />;
});
