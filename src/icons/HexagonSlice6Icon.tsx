import React, { FC, memo } from 'react';
import HexagonSlice6Svg from '../svg/hexagon-slice-6.svg';

export interface IHexagonSlice6IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagonSlice6Icon: FC<IHexagonSlice6IconProps> = memo(props => {
  return <HexagonSlice6Svg {...props} />;
});
