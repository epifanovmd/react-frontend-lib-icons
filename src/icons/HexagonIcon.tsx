import React, { FC, memo } from 'react';
import HexagonSvg from '../svg/hexagon.svg';

export interface IHexagonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagonIcon: FC<IHexagonIconProps> = memo(props => {
  return <HexagonSvg {...props} />;
});
