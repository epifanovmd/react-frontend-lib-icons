import React, { FC, memo } from 'react';
import HexagonMultipleSvg from '../svg/hexagon-multiple.svg';

export interface IHexagonMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagonMultipleIcon: FC<IHexagonMultipleIconProps> = memo(props => {
  return <HexagonMultipleSvg {...props} />;
});
