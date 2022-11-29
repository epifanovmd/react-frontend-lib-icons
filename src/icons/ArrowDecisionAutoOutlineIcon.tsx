import React, { FC, memo } from 'react';
import ArrowDecisionAutoOutlineSvg from '../svg/arrow-decision-auto-outline.svg';

export interface IArrowDecisionAutoOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDecisionAutoOutlineIcon: FC<IArrowDecisionAutoOutlineIconProps> = memo(props => {
  return <ArrowDecisionAutoOutlineSvg {...props} />;
});
