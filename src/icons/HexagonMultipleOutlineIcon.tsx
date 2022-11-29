import React, { FC, memo } from 'react';
import HexagonMultipleOutlineSvg from '../svg/hexagon-multiple-outline.svg';

export interface IHexagonMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagonMultipleOutlineIcon: FC<IHexagonMultipleOutlineIconProps> = memo(props => {
  return <HexagonMultipleOutlineSvg {...props} />;
});
