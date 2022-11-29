import React, { FC, memo } from 'react';
import ArrowDownBoldHexagonOutlineSvg from '../svg/arrow-down-bold-hexagon-outline.svg';

export interface IArrowDownBoldHexagonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownBoldHexagonOutlineIcon: FC<IArrowDownBoldHexagonOutlineIconProps> = memo(props => {
  return <ArrowDownBoldHexagonOutlineSvg {...props} />;
});
