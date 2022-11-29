import React, { FC, memo } from 'react';
import ArrangeBringToFrontSvg from '../svg/arrange-bring-to-front.svg';

export interface IArrangeBringToFrontIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrangeBringToFrontIcon: FC<IArrangeBringToFrontIconProps> = memo(props => {
  return <ArrangeBringToFrontSvg {...props} />;
});
