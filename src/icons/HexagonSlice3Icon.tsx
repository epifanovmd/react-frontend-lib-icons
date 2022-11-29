import React, { FC, memo } from 'react';
import HexagonSlice3Svg from '../svg/hexagon-slice-3.svg';

export interface IHexagonSlice3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagonSlice3Icon: FC<IHexagonSlice3IconProps> = memo(props => {
  return <HexagonSlice3Svg {...props} />;
});
