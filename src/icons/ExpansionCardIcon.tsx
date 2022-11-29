import React, { FC, memo } from 'react';
import ExpansionCardSvg from '../svg/expansion-card.svg';

export interface IExpansionCardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExpansionCardIcon: FC<IExpansionCardIconProps> = memo(props => {
  return <ExpansionCardSvg {...props} />;
});
