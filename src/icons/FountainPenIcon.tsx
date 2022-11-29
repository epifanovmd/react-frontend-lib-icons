import React, { FC, memo } from 'react';
import FountainPenSvg from '../svg/fountain-pen.svg';

export interface IFountainPenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FountainPenIcon: FC<IFountainPenIconProps> = memo(props => {
  return <FountainPenSvg {...props} />;
});
