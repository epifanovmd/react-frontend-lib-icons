import React, { FC, memo } from 'react';
import GlassMugSvg from '../svg/glass-mug.svg';

export interface IGlassMugIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassMugIcon: FC<IGlassMugIconProps> = memo(props => {
  return <GlassMugSvg {...props} />;
});
