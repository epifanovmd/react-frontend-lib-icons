import React, { FC, memo } from 'react';
import HumanGreetingVariantSvg from '../svg/human-greeting-variant.svg';

export interface IHumanGreetingVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanGreetingVariantIcon: FC<IHumanGreetingVariantIconProps> = memo(props => {
  return <HumanGreetingVariantSvg {...props} />;
});
