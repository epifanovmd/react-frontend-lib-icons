import React, { FC, memo } from 'react';
import HexagonSlice1Svg from '../svg/hexagon-slice-1.svg';

export interface IHexagonSlice1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagonSlice1Icon: FC<IHexagonSlice1IconProps> = memo(props => {
  return <HexagonSlice1Svg {...props} />;
});
