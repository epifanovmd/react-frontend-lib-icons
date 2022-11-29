import React, { FC, memo } from 'react';
import GlobeLightSvg from '../svg/globe-light.svg';

export interface IGlobeLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlobeLightIcon: FC<IGlobeLightIconProps> = memo(props => {
  return <GlobeLightSvg {...props} />;
});
