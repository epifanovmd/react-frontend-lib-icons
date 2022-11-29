import React, { FC, memo } from 'react';
import AlphaPCircleOutlineSvg from '../svg/alpha-p-circle-outline.svg';

export interface IAlphaPCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaPCircleOutlineIcon: FC<IAlphaPCircleOutlineIconProps> = memo(props => {
  return <AlphaPCircleOutlineSvg {...props} />;
});
