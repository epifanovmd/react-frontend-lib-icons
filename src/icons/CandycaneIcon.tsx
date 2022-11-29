import React, { FC, memo } from 'react';
import CandycaneSvg from '../svg/candycane.svg';

export interface ICandycaneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CandycaneIcon: FC<ICandycaneIconProps> = memo(props => {
  return <CandycaneSvg {...props} />;
});
