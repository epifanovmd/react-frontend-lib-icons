import React, { FC, memo } from 'react';
import AlphaMCircleOutlineSvg from '../svg/alpha-m-circle-outline.svg';

export interface IAlphaMCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaMCircleOutlineIcon: FC<IAlphaMCircleOutlineIconProps> = memo(props => {
  return <AlphaMCircleOutlineSvg {...props} />;
});
