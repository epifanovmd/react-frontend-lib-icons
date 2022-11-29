import React, { FC, memo } from 'react';
import ArrowDecisionAutoSvg from '../svg/arrow-decision-auto.svg';

export interface IArrowDecisionAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDecisionAutoIcon: FC<IArrowDecisionAutoIconProps> = memo(props => {
  return <ArrowDecisionAutoSvg {...props} />;
});
