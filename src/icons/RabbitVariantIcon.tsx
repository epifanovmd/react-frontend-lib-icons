import React, { FC, memo } from 'react';
import RabbitVariantSvg from '../svg/rabbit-variant.svg';

export interface IRabbitVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RabbitVariantIcon: FC<IRabbitVariantIconProps> = memo(props => {
  return <RabbitVariantSvg {...props} />;
});
