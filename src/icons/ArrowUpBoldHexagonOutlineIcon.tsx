import React, { FC, memo } from 'react';
import ArrowUpBoldHexagonOutlineSvg from '../svg/arrow-up-bold-hexagon-outline.svg';

export interface IArrowUpBoldHexagonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpBoldHexagonOutlineIcon: FC<IArrowUpBoldHexagonOutlineIconProps> = memo(props => {
  return <ArrowUpBoldHexagonOutlineSvg {...props} />;
});
