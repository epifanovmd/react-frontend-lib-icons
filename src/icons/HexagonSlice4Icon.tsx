import React, { FC, memo } from 'react';
import HexagonSlice4Svg from '../svg/hexagon-slice-4.svg';

export interface IHexagonSlice4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagonSlice4Icon: FC<IHexagonSlice4IconProps> = memo(props => {
  return <HexagonSlice4Svg {...props} />;
});
