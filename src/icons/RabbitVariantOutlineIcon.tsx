import React, { FC, memo } from 'react';
import RabbitVariantOutlineSvg from '../svg/rabbit-variant-outline.svg';

export interface IRabbitVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RabbitVariantOutlineIcon: FC<IRabbitVariantOutlineIconProps> = memo(props => {
  return <RabbitVariantOutlineSvg {...props} />;
});
