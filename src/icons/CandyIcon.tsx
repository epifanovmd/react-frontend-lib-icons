import React, { FC, memo } from 'react';
import CandySvg from '../svg/candy.svg';

export interface ICandyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CandyIcon: FC<ICandyIconProps> = memo(props => {
  return <CandySvg {...props} />;
});
