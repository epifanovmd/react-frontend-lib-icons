import React, { FC, memo } from 'react';
import HexagonSlice2Svg from '../svg/hexagon-slice-2.svg';

export interface IHexagonSlice2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagonSlice2Icon: FC<IHexagonSlice2IconProps> = memo(props => {
  return <HexagonSlice2Svg {...props} />;
});
