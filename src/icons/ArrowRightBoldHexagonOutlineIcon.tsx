import React, { FC, memo } from 'react';
import ArrowRightBoldHexagonOutlineSvg from '../svg/arrow-right-bold-hexagon-outline.svg';

export interface IArrowRightBoldHexagonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightBoldHexagonOutlineIcon: FC<IArrowRightBoldHexagonOutlineIconProps> = memo(props => {
  return <ArrowRightBoldHexagonOutlineSvg {...props} />;
});
