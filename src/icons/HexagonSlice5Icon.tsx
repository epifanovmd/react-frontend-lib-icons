import React, { FC, memo } from 'react';
import HexagonSlice5Svg from '../svg/hexagon-slice-5.svg';

export interface IHexagonSlice5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagonSlice5Icon: FC<IHexagonSlice5IconProps> = memo(props => {
  return <HexagonSlice5Svg {...props} />;
});
