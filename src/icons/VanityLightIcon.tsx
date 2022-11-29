import React, { FC, memo } from 'react';
import VanityLightSvg from '../svg/vanity-light.svg';

export interface IVanityLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VanityLightIcon: FC<IVanityLightIconProps> = memo(props => {
  return <VanityLightSvg {...props} />;
});
