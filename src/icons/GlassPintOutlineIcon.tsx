import React, { FC, memo } from 'react';
import GlassPintOutlineSvg from '../svg/glass-pint-outline.svg';

export interface IGlassPintOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassPintOutlineIcon: FC<IGlassPintOutlineIconProps> = memo(props => {
  return <GlassPintOutlineSvg {...props} />;
});
