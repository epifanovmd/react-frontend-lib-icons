import React, { FC, memo } from 'react';
import DotsHexagonSvg from '../svg/dots-hexagon.svg';

export interface IDotsHexagonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsHexagonIcon: FC<IDotsHexagonIconProps> = memo(props => {
  return <DotsHexagonSvg {...props} />;
});
