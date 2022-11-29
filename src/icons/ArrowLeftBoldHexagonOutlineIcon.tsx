import React, { FC, memo } from 'react';
import ArrowLeftBoldHexagonOutlineSvg from '../svg/arrow-left-bold-hexagon-outline.svg';

export interface IArrowLeftBoldHexagonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftBoldHexagonOutlineIcon: FC<IArrowLeftBoldHexagonOutlineIconProps> = memo(props => {
  return <ArrowLeftBoldHexagonOutlineSvg {...props} />;
});
