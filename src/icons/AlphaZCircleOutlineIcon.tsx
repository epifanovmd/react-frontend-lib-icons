import React, { FC, memo } from 'react';
import AlphaZCircleOutlineSvg from '../svg/alpha-z-circle-outline.svg';

export interface IAlphaZCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaZCircleOutlineIcon: FC<IAlphaZCircleOutlineIconProps> = memo(props => {
  return <AlphaZCircleOutlineSvg {...props} />;
});
