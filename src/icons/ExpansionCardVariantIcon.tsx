import React, { FC, memo } from 'react';
import ExpansionCardVariantSvg from '../svg/expansion-card-variant.svg';

export interface IExpansionCardVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExpansionCardVariantIcon: FC<IExpansionCardVariantIconProps> = memo(props => {
  return <ExpansionCardVariantSvg {...props} />;
});
