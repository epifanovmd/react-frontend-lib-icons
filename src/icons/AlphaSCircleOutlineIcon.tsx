import React, { FC, memo } from 'react';
import AlphaSCircleOutlineSvg from '../svg/alpha-s-circle-outline.svg';

export interface IAlphaSCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaSCircleOutlineIcon: FC<IAlphaSCircleOutlineIconProps> = memo(props => {
  return <AlphaSCircleOutlineSvg {...props} />;
});
