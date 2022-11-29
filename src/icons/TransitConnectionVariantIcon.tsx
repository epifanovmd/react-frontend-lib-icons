import React, { FC, memo } from 'react';
import TransitConnectionVariantSvg from '../svg/transit-connection-variant.svg';

export interface ITransitConnectionVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransitConnectionVariantIcon: FC<ITransitConnectionVariantIconProps> = memo(props => {
  return <TransitConnectionVariantSvg {...props} />;
});
