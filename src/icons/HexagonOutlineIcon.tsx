import React, { FC, memo } from 'react';
import HexagonOutlineSvg from '../svg/hexagon-outline.svg';

export interface IHexagonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagonOutlineIcon: FC<IHexagonOutlineIconProps> = memo(props => {
  return <HexagonOutlineSvg {...props} />;
});
