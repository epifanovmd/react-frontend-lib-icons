import React, { FC, memo } from 'react';
import ArrowDecisionSvg from '../svg/arrow-decision.svg';

export interface IArrowDecisionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDecisionIcon: FC<IArrowDecisionIconProps> = memo(props => {
  return <ArrowDecisionSvg {...props} />;
});
