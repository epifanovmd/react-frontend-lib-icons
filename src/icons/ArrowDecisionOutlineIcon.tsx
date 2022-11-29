import React, { FC, memo } from 'react';
import ArrowDecisionOutlineSvg from '../svg/arrow-decision-outline.svg';

export interface IArrowDecisionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDecisionOutlineIcon: FC<IArrowDecisionOutlineIconProps> = memo(props => {
  return <ArrowDecisionOutlineSvg {...props} />;
});
