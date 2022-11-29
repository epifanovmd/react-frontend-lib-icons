import React, { FC, memo } from 'react';
import ArrangeBringForwardSvg from '../svg/arrange-bring-forward.svg';

export interface IArrangeBringForwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrangeBringForwardIcon: FC<IArrangeBringForwardIconProps> = memo(props => {
  return <ArrangeBringForwardSvg {...props} />;
});
