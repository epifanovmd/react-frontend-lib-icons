import React, { FC, memo } from 'react';
import NuxtSvg from '../svg/nuxt.svg';

export interface INuxtIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NuxtIcon: FC<INuxtIconProps> = memo(props => {
  return <NuxtSvg {...props} />;
});
